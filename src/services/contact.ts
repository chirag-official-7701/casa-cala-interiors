import type { ContactPayload } from '../types';
import { sanitize } from '../utils/validation';

/* =========================================================================
   Contact service layer
   -------------------------------------------------------------------------
   A thin abstraction over the network so the UI never talks to fetch/axios
   directly. Today it simulates a request; to go live, set VITE_CONTACT_ENDPOINT
   and the real branch below will POST the payload. No component changes needed.
   ========================================================================= */

export interface ContactResult {
  ok: boolean;
  message: string;
}

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

/** Sanitise every field before it leaves the client. */
function clean(payload: ContactPayload): ContactPayload {
  return {
    name: sanitize(payload.name),
    email: sanitize(payload.email),
    phone: sanitize(payload.phone),
    projectType: sanitize(payload.projectType),
    budget: sanitize(payload.budget),
    message: sanitize(payload.message),
  };
}

export async function submitContact(
  payload: ContactPayload,
): Promise<ContactResult> {
  const body = clean(payload);

  // --- Real submission (enabled when an endpoint is configured) ---
  if (ENDPOINT) {
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      return { ok: true, message: 'Thank you — we will be in touch shortly.' };
    } catch {
      return {
        ok: false,
        message: 'Something went wrong sending your message. Please try again.',
      };
    }
  }

  // --- Simulated submission (development / demo) ---
  await new Promise((resolve) => setTimeout(resolve, 1200));
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.info('[contact] simulated submission', body);
  }
  return { ok: true, message: 'Thank you — we will be in touch shortly.' };
}
