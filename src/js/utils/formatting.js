// Formatting utilities for prices, dates, etc.

export function formatPrice(amount) {
  return `₹${parseFloat(amount || 0).toFixed(2)}`;
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0
  }).format(amount);
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

export function formatDateTime(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

export function formatTime(dateString) {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit'
  });
}

export function getDateOnly(dateString) {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];
}

export function generateOrderId() {
  return 'ORD' + Date.now();
}

export function generateCustomerId() {
  return 'C' + Date.now();
}

export function truncateText(text, length = 50) {
  return text.length > length ? text.substring(0, length) + '...' : text;
}

export function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatItemsList(items) {
  return items.map(item => `${item.name} ×${item.qty}`).join(', ');
}
