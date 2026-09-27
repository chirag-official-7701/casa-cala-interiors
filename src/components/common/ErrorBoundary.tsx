import { Component, type ReactNode } from 'react';
import { Button } from './Button';
import styles from './ErrorBoundary.module.css';

interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
}

/** Catches render errors anywhere below it and shows a graceful fallback. */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    // In production this is where you would report to your monitoring service.
    if (import.meta.env.DEV) {
      console.error('Render error caught by ErrorBoundary:', error);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false });
    window.location.assign('/');
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.wrap} role="alert">
          <span className={styles.eyebrow}>Something went wrong</span>
          <h1 className={styles.title}>An unexpected error occurred.</h1>
          <p className={styles.text}>
            Please refresh the page or return home. If the problem persists, do
            get in touch with the studio.
          </p>
          <Button onClick={this.handleReset} tone="dark" withArrow>
            Return Home
          </Button>
        </div>
      );
    }
    return this.props.children;
  }
}
