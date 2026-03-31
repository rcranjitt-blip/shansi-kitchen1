// Toast notification utility

export function toast(message, type = 'info') {
  const toastEl = document.createElement('div');
  toastEl.className = 'toast';
  
  // Set background color based on type
  const colors = {
    'success': 'bg-green-500',
    'error': 'bg-red-500',
    'warning': 'bg-yellow-500',
    'info': 'bg-blue-500'
  };
  
  toastEl.classList.add(colors[type] || colors['info']);
  toastEl.textContent = message;
  
  document.body.appendChild(toastEl);
  
  // Remove after 3 seconds
  setTimeout(() => {
    toastEl.style.animation = 'slideUp 0.3s ease reverse';
    setTimeout(() => {
      toastEl.remove();
    }, 300);
  }, 3000);
}

export function toastSuccess(message) {
  toast(message, 'success');
}

export function toastError(message) {
  toast(message, 'error');
}

export function toastWarning(message) {
  toast(message, 'warning');
}

export function toastInfo(message) {
  toast(message, 'info');
}
