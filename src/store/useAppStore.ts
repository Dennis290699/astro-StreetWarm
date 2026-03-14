import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  cartItemId?: string;
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
  color?: string;
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

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
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
        const cartItemId = `${item.id}-${item.size || ''}-${item.color || ''}`;
        const existing = state.cartItems.find(i => i.cartItemId === cartItemId);

        if (existing) {
          return {
            cartItems: state.cartItems.map(i => 
              i.cartItemId === cartItemId
                ? { ...i, quantity: i.quantity + item.quantity } 
                : i
            )
          };
        }
        return { cartItems: [...state.cartItems, { ...item, cartItemId }] };
      }),

      removeFromCart: (cartItemId) => set((state) => ({
        cartItems: state.cartItems.filter(item => item.cartItemId !== cartItemId)
      })),

      updateQuantity: (cartItemId, delta) => set((state) => ({
        cartItems: state.cartItems.map(item => {
          if (item.cartItemId === cartItemId) {
            const newQty = Math.max(1, item.quantity + delta);
            return { ...item, quantity: newQty };
          }
          return item;
        })
      })),

      clearCart: () => set({ cartItems: [] })
    }),
    {
      name: 'streetwarm-storage',
      partialize: (state) => ({ cartItems: state.cartItems })
    }
  )
);
