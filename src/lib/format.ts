export function formatPrice(value: number, digits = 5): string { return new Intl.NumberFormat('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value); }
export function formatSigned(value: number, digits = 2): string { return `${value >= 0 ? '+' : ''}${value.toFixed(digits)}`; }
