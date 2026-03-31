// DOM manipulation helpers

export function showScreen(screenId) {
  // Hide all screens
  document.querySelectorAll('[data-screen]').forEach(screen => {
    screen.classList.remove('active');
  });
  
  // Show target screen
  const screen = document.getElementById(screenId);
  if (screen) {
    screen.classList.add('active');
    
    // Update navigation back button
    updateNavigation(screenId);
  }
}

export function updateNavigation(screenId) {
  const backBtn = document.getElementById('nav-back');
  const loginBtn = document.getElementById('nav-login');
  
  // Show back button on all screens except home and login
  if (screenId !== 'screen-home' && screenId !== 'screen-login') {
    backBtn?.classList.remove('hidden');
  } else {
    backBtn?.classList.add('hidden');
  }
  
  // Hide login button on login screen
  if (screenId === 'screen-login') {
    loginBtn?.classList.add('hidden');
  } else {
    loginBtn?.classList.remove('hidden');
  }
}

export function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('open');
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }
}

export function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('open');
    // Restore body scroll
    document.body.style.overflow = 'auto';
  }
}

export function updateElement(id, content) {
  const el = document.getElementById(id);
  if (el) {
    el.innerHTML = content;
  }
}

export function setElementText(id, text) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = text;
  }
}

export function getInputValue(id) {
  const el = document.getElementById(id);
  return el ? el.value : '';
}

export function setInputValue(id, value) {
  const el = document.getElementById(id);
  if (el) {
    el.value = value;
  }
}

export function getSelectedValue(id) {
  const el = document.getElementById(id);
  return el ? el.value : '';
}

export function setSelectedValue(id, value) {
  const el = document.getElementById(id);
  if (el) {
    el.value = value;
  }
}

export function switchAdminTab(tabName) {
  // Hide all admin tab contents
  document.querySelectorAll('.admin-tab-content').forEach(tab => {
    tab.classList.add('hidden');
  });
  
  // Remove active styling from all tab buttons
  document.querySelectorAll('.admin-tab-btn').forEach(btn => {
    btn.classList.remove('border-primary');
    btn.classList.add('border-border');
  });
  
  // Show selected tab content
  const tabContent = document.getElementById(`admin-${tabName}`);
  if (tabContent) {
    tabContent.classList.remove('hidden');
  }
  
  // Highlight selected tab button
  const tabBtn = document.querySelector(`[data-tab="${tabName}"]`);
  if (tabBtn) {
    tabBtn.classList.add('border-primary');
    tabBtn.classList.remove('border-border');
  }
}

export function clearForm(formId) {
  const form = document.getElementById(formId);
  if (form) {
    form.reset();
  }
}

export function formatPrice(price) {
  return `₹${parseFloat(price).toFixed(2)}`;
}

export function formatDate(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}
