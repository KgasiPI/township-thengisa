export function formatCurrency(amount) {
  return `R${Number(amount || 0).toFixed(2)}`;
}