import { trackEvent } from './analytics'

const WHATSAPP_NUMBER = '5515997992549'

export const CATALOG_WHATSAPP_MESSAGE =
  'Oi, vim do site da Fera Proart e gostaria do catálogo.'

export function openWhatsApp(message: string): void {
  trackEvent('whatsapp_click', {
    method: 'whatsapp',
    page_path: window.location.pathname,
    page_title: document.title,
  })

  const encodedMessage = encodeURIComponent(message)
  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`

  window.open(url, '_blank', 'noopener,noreferrer')
}