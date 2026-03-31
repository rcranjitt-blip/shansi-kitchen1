// Default menu items and categories
export const defaultMenu = [
  { id: 'm1', name: 'Idli', cat: 'Breakfast', price: 40, desc: 'Steamed rice and lentil cakes', img: 'https://via.placeholder.com/200?text=Idli', available: true },
  { id: 'm2', name: 'Dosa', cat: 'Breakfast', price: 50, desc: 'Crispy fermented rice pancake', img: 'https://via.placeholder.com/200?text=Dosa', available: true },
  { id: 'm3', name: 'Biryani', cat: 'Lunch', price: 200, desc: 'Fragrant basmati rice with meat', img: 'https://via.placeholder.com/200?text=Biryani', available: true },
  { id: 'm4', name: 'Sambar Rice', cat: 'Lunch', price: 120, desc: 'Rice with vegetable curry', img: 'https://via.placeholder.com/200?text=Sambar+Rice', available: true },
  { id: 'm5', name: 'Butter Chicken', cat: 'Dinner', price: 280, desc: 'Creamy tomato-based chicken curry', img: 'https://via.placeholder.com/200?text=Butter+Chicken', available: true },
  { id: 'm6', name: 'Paneer Tikka', cat: 'Dinner', price: 220, desc: 'Grilled cottage cheese with spices', img: 'https://via.placeholder.com/200?text=Paneer+Tikka', available: true },
  { id: 'm7', name: 'Idli Tiffin', cat: 'Tiffin', price: 30, desc: 'Pack of 2 idlis with chutney', img: 'https://via.placeholder.com/200?text=Idli+Tiffin', available: true },
  { id: 'm8', name: 'Vada', cat: 'Snacks', price: 35, desc: 'Deep-fried lentil donuts', img: 'https://via.placeholder.com/200?text=Vada', available: true },
  { id: 'm9', name: 'Gulab Jamun', cat: 'Sweets', price: 60, desc: 'Milk solids in sugar syrup', img: 'https://via.placeholder.com/200?text=Gulab+Jamun', available: true },
  { id: 'm10', name: 'Filter Coffee', cat: 'Beverages', price: 30, desc: 'South Indian style coffee', img: 'https://via.placeholder.com/200?text=Filter+Coffee', available: true }
];

export const categories = ['Breakfast', 'Lunch', 'Dinner', 'Tiffin', 'Snacks', 'Sweets', 'Beverages'];

export const deliveryCharge = 50;

export const defaultOrders = [];

export const defaultCustomers = [];

// Helper to get menu from store with fallback to default
export function getMenuFromStore(STORE) {
  let menu = STORE.get('menu');
  if (!menu || menu.length === 0) {
    STORE.set('menu', defaultMenu);
    menu = defaultMenu;
  }
  return menu;
}

// Helper to initialize store if empty
export function initializeStore(STORE) {
  if (!STORE.get('menu')) {
    STORE.set('menu', defaultMenu);
  }
  if (!STORE.get('orders')) {
    STORE.set('orders', defaultOrders);
  }
  if (!STORE.get('customers')) {
    STORE.set('customers', defaultCustomers);
  }
}
