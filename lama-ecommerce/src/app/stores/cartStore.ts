import { create } from "zustand";
import {
  CartItemType,
  CartStoreActionsType,
  CartStoreStateType,
} from "../lib/types";
import { persist } from "zustand/middleware";
const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
  persist(
    (set) => ({
      cart: [],
	  hasHydrated: false,
      addToCart: (product: CartItemType) =>
        set((state) => {
          const existingIndex = state.cart.findIndex(
            (item: CartItemType) =>
              item.id === product.id &&
              item.selectedSize === product.selectedSize &&
              item.selectedColor === product.selectedColor
          );
          if (existingIndex != -1) {
            const updatedCart: CartItemType[] = [...state.cart];
            updatedCart[existingIndex].quantity += product.quantity || 1;
            return { cart: updatedCart };
          }
          return { cart: [...state.cart, product] };
        }),
      removeFromCart: (product: CartItemType) =>
        set((state) => ({
				cart: state.cart.filter(item => !(
					item.id === product.id &&
					item.selectedColor === product.selectedColor &&
					item.selectedSize === product.selectedSize
				))
		})),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
	  onRehydrateStorage: (state) => {
		if(state)
			state.hasHydrated=true;
	  }
    }
  )
);

export default useCartStore;
