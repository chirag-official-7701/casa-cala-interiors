import type { ReactNode, ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import styles from './Button.module.css';

type Variant = 'primary' | 'outline' | 'ghost';
type Tone = 'light' | 'dark';

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  /** Adapts colours to sit on a light or dark surface. */
  tone?: Tone;
  withArrow?: boolean;
  className?: string;
}

interface ButtonAsButton
  extends
    BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> {
  to?: undefined;
  href?: undefined;
}

interface ButtonAsLink extends BaseProps {
  /** Internal route. */
  to: string;
  href?: undefined;
}

interface ButtonAsAnchor extends BaseProps {
  /** External link. */
  href: string;
  to?: undefined;
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

/**
 * Polymorphic button: renders a <button>, an internal <Link>, or an external
 * <a> based on props — with a shared premium hover treatment.
 */
export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    tone = 'light',
    withArrow = false,
    className,
  } = props;

  const classes = cn(styles.btn, styles[variant], styles[tone], className);

  const inner = (
    <>
      <span className={styles.label}>{children}</span>
      {withArrow && (
        <ArrowRight
          className={styles.arrow}
          size={17}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      )}
    </>
  );

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {inner}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    return (
      <a
        href={props.href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    );
  }

  const {
    onClick,
    type = 'button',
    disabled,
    'aria-label': ariaLabel,
  } = props as ButtonAsButton;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={classes}
    >
      {inner}
    </button>
  );
}
