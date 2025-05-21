export function truncate(text, maxLength) {
  const string = new String(text)
  if (string.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function currency(price){
  return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',}).format(price)
    }