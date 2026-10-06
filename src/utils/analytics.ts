declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, unknown>,
    ) => void
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>,
): void {
  window.gtag?.('event', eventName, params)
}