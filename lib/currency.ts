/**
 * Mengkonversi harga dari USD ke IDR dan memformatnya
 * Asumsi: 1 USD = 15,000 IDR (bisa disesuaikan)
 */
const USD_TO_IDR_RATE = 15000;

export function formatToRupiah(priceInUSD: number): string {
  const priceInIDR = priceInUSD * USD_TO_IDR_RATE;
  
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(priceInIDR);
}
