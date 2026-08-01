const WHATSAPP_NUMBER = "5515997992549";

export function openWhatsApp(message: string): void {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  window.open(url, "_blank", "noopener,noreferrer");
}
