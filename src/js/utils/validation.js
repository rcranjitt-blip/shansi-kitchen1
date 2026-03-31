// Form validation utilities

export function validateMobile(mobile) {
  const mobileRegex = /^[0-9]{10}$/;
  return mobileRegex.test(mobile);
}

export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateOTP(otp) {
  return /^[0-9]{4,6}$/.test(otp);
}

export function validateName(name) {
  return name.trim().length >= 2;
}

export function validateAddress(address) {
  return address.trim().length >= 5;
}

export function validatePrice(price) {
  return parseFloat(price) > 0;
}

export function validateRequired(value) {
  return value && value.trim().length > 0;
}

export function getValidationError(field, value) {
  const fieldValidators = {
    'mobile': { fn: validateMobile, msg: 'Enter a valid 10-digit mobile number' },
    'email': { fn: validateEmail, msg: 'Enter a valid email address' },
    'otp': { fn: validateOTP, msg: 'Enter a valid OTP (4-6 digits)' },
    'name': { fn: validateName, msg: 'Name must be at least 2 characters' },
    'address': { fn: validateAddress, msg: 'Address must be at least 5 characters' },
    'price': { fn: validatePrice, msg: 'Price must be greater than 0' }
  };
  
  const validator = fieldValidators[field];
  if (validator && !validator.fn(value)) {
    return validator.msg;
  }
  
  return null;
}
