import { SITE } from '../../constants/site';
import styles from './WhatsAppButton.module.css';

const MESSAGE = `Hi ${SITE.name}, I'd like to discuss a project.`;

/**
 * Floating "Start a chat" button. Opens a direct WhatsApp conversation with
 * the studio's number, pre-filled with a short message.
 */
export function WhatsAppButton() {
  const href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      className={styles.fab}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Start a chat on WhatsApp"
    >
      <span className={styles.icon} aria-hidden="true">
        {/* WhatsApp glyph — handset within a chat bubble */}
        <svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor">
          <path d="M16.01 4C9.94 4 5 8.94 5 15.01c0 2.12.6 4.1 1.64 5.78L5 28l7.38-1.6a11 11 0 0 0 3.63.62h.01C22.08 27.02 27 22.08 27 16.01 27 9.94 22.08 4 16.01 4Zm0 20.2h-.01c-1.11 0-2.2-.3-3.16-.86l-.23-.13-4.38.95.93-4.27-.15-.24a9.13 9.13 0 0 1-1.4-4.83c0-5.04 4.11-9.14 9.16-9.14 2.45 0 4.75.95 6.48 2.68a9.1 9.1 0 0 1 2.68 6.47c0 5.05-4.11 9.14-9.15 9.14Zm5.02-6.84c-.28-.14-1.63-.8-1.88-.9-.25-.09-.43-.13-.62.14-.18.28-.71.9-.87 1.08-.16.18-.32.2-.6.07-.28-.14-1.16-.43-2.22-1.37-.82-.73-1.37-1.63-1.53-1.9-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.49.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.47l-.53-.01c-.18 0-.48.07-.73.35-.25.28-.96.94-.96 2.3 0 1.35.99 2.66 1.12 2.84.14.18 1.94 2.97 4.71 4.16.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.63-.67 1.86-1.31.23-.64.23-1.19.16-1.31-.07-.12-.25-.19-.53-.33Z" />
        </svg>
      </span>
      <span className={styles.label}>Start a chat</span>
    </a>
  );
}
