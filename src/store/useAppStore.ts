import { create } from 'zustand';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface AppState {
  isMenuOpen: boolean;
  isCartOpen: boolean;
  isLoginOpen: boolean;
  isScrolled: boolean;
  cartItems: CartItem[];

  toggleMenu: () => void;
  closeMenu: () => void;
  
  toggleCart: () => void;
  closeCart: () => void;
  
  toggleLogin: () => void;
  closeLogin: () => void;

  setScrolled: (scrolled: boolean) => void;

  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  isMenuOpen: false,
  isCartOpen: false,
  isLoginOpen: false,
  isScrolled: false,
  cartItems: [],

  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen, isCartOpen: false, isLoginOpen: false })),
  closeMenu: () => set({ isMenuOpen: false }),

  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen, isMenuOpen: false, isLoginOpen: false })),
  closeCart: () => set({ isCartOpen: false }),

  toggleLogin: () => set((state) => ({ isLoginOpen: !state.isLoginOpen, isMenuOpen: false, isCartOpen: false })),
  closeLogin: () => set({ isLoginOpen: false }),

  setScrolled: (scrolled) => set({ isScrolled: scrolled }),

  addToCart: (item) => set((state) => {
    const existing = state.cartItems.find(i => i.id === item.id);
    if (existing) {
      return {
        cartItems: state.cartItems.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        )
      };
    }
    return { cartItems: [...state.cartItems, item] };
  }),

  removeFromCart: (id) => set((state) => ({
    cartItems: state.cartItems.filter(item => item.id !== id)
  })),

  updateQuantity: (id, delta) => set((state) => ({
    cartItems: state.cartItems.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    })
  })),

  clearCart: () => set({ cartItems: [] })
}));
