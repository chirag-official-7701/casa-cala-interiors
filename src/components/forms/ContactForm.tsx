import { useId, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';
import type { ContactPayload, SubmitStatus } from '../../types';
import { validateContact, type ContactErrors } from '../../utils/validation';
import { submitContact } from '../../services/contact';
import { PROJECT_TYPES, BUDGET_RANGES } from '../../constants/site';
import { cn } from '../../utils/cn';
import styles from './ContactForm.module.css';

const EMPTY: ContactPayload = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  budget: '',
  message: '',
};

export function ContactForm() {
  const reduce = useReducedMotion();
  const uid = useId();
  const [values, setValues] = useState<ContactPayload>(EMPTY);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [serverMessage, setServerMessage] = useState('');
  const firstErrorRef = useRef<string | null>(null);

  const update = <K extends keyof ContactPayload>(key: K, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    // Clear a field's error as the user corrects it.
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);

    const errorKeys = Object.keys(nextErrors);
    if (errorKeys.length > 0) {
      firstErrorRef.current = errorKeys[0];
      // Move focus to the first invalid field for accessibility.
      document.getElementById(`${uid}-${errorKeys[0]}`)?.focus();
      return;
    }

    setStatus('submitting');
    setServerMessage('');
    const result = await submitContact(values);
    if (result.ok) {
      setStatus('success');
      setServerMessage(result.message);
      setValues(EMPTY);
    } else {
      setStatus('error');
      setServerMessage(result.message);
    }
  };

  const fieldId = (name: string) => `${uid}-${name}`;
  const errId = (name: string) => `${uid}-${name}-error`;

  if (status === 'success') {
    return (
      <motion.div
        className={styles.success}
        role="status"
        initial={reduce ? undefined : { opacity: 0, y: 16 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
      >
        <span className={styles.successIcon} aria-hidden="true">
          <Check size={28} strokeWidth={1.5} />
        </span>
        <h3 className={styles.successTitle}>Message received.</h3>
        <p className={styles.successText}>{serverMessage}</p>
        <button
          type="button"
          className={styles.reset}
          onClick={() => setStatus('idle')}
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <Field
          id={fieldId('name')}
          label="Name"
          required
          error={errors.name}
          errorId={errId('name')}
        >
          <input
            id={fieldId('name')}
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? errId('name') : undefined}
          />
        </Field>

        <Field
          id={fieldId('email')}
          label="Email"
          required
          error={errors.email}
          errorId={errId('email')}
        >
          <input
            id={fieldId('email')}
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? errId('email') : undefined}
          />
        </Field>
      </div>

      <div className={styles.row}>
        <Field
          id={fieldId('phone')}
          label="Phone"
          error={errors.phone}
          errorId={errId('phone')}
        >
          <input
            id={fieldId('phone')}
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? errId('phone') : undefined}
          />
        </Field>

        <Field
          id={fieldId('projectType')}
          label="Project Type"
          required
          error={errors.projectType}
          errorId={errId('projectType')}
        >
          <select
            id={fieldId('projectType')}
            value={values.projectType}
            onChange={(e) => update('projectType', e.target.value)}
            aria-invalid={!!errors.projectType}
            aria-describedby={
              errors.projectType ? errId('projectType') : undefined
            }
          >
            <option value="" disabled>
              Select…
            </option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id={fieldId('budget')} label="Budget Range">
        <select
          id={fieldId('budget')}
          value={values.budget}
          onChange={(e) => update('budget', e.target.value)}
        >
          <option value="">Prefer not to say</option>
          {BUDGET_RANGES.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </Field>

      <Field
        id={fieldId('message')}
        label="Message"
        required
        error={errors.message}
        errorId={errId('message')}
      >
        <textarea
          id={fieldId('message')}
          rows={5}
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="Tell us about your space and ambitions…"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? errId('message') : undefined}
        />
      </Field>

      <div className={styles.footer}>
        <button
          type="submit"
          className={styles.submit}
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <>
              <Loader2 size={17} className={styles.spin} aria-hidden="true" />
              Sending…
            </>
          ) : (
            'Start a Conversation'
          )}
        </button>

        <AnimatePresence>
          {status === 'error' && (
            <motion.p
              className={styles.formError}
              role="alert"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {serverMessage}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

/* ---- Field wrapper: label + error, consistent + accessible ---- */
interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  errorId?: string;
  children: React.ReactNode;
}

function Field({ id, label, required, error, errorId, children }: FieldProps) {
  return (
    <div className={cn(styles.field, error && styles.hasError)}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {required && (
          <span className={styles.required} aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <span id={errorId} className={styles.error}>
          {error}
        </span>
      )}
    </div>
  );
}
