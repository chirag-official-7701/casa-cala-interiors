import type { ContactPayload } from '../types';

export type ContactErrors = Partial<Record<keyof ContactPayload, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Permissive international phone check: digits, spaces, +, -, () — 7-20 chars.
const PHONE_RE = /^[+()\-\s\d]{7,20}$/;

/**
 * Validate the contact form. Pure function — easy to unit test and reuse.
 * Returns a map of field -> error message (empty object means valid).
 */
export function validateContact(values: ContactPayload): ContactErrors {
  const errors: ContactErrors = {};

  if (!values.name.trim()) {
    errors.name = 'Please tell us your name.';
  } else if (values.name.trim().length < 2) {
    errors.name = 'That name looks a little short.';
  }

  if (!values.email.trim()) {
    errors.email = 'An email lets us reply to you.';
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (values.phone.trim() && !PHONE_RE.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!values.projectType) {
    errors.projectType = 'Select a project type.';
  }

  if (!values.message.trim()) {
    errors.message = 'A short note helps us prepare.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Please add a little more detail.';
  }

  return errors;
}

/** Basic input sanitisation — strip angle brackets to avoid HTML injection. */
export function sanitize(value: string): string {
  return value.replace(/[<>]/g, '').trim();
}
