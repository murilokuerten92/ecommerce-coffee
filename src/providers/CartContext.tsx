import { createContext, ReactNode, useContext, useReducer, useEffect } from 'react'
import { Cart, CoffeeType } from '@/@types/mockes'
import { cartReducer, CART_KEY, initializer } from "@/reducers/carts/reducers"
import { ActionTypes } from '@/reducers/carts/actions';
import { setStorageItem } from '@/utils/localStorage'
import { toast } from 'react-toastify'

export interface CartContextType {
  items: Cart[];
  addToCart: (data: CoffeeType) => void;
  removeFromCart: (data: Cart) => void;
  updateCoffeeAmountFromCart: (type: 'add' | 'remove', coffeeId: number) => void;
}

export const CartContextDefaultValues = {
  items: [],
  addToCart: () => null,
  removeFromCart: () => null,
  updateCoffeeAmountFromCart: () => null
}

export const CartContext = createContext<CartContextType>(CartContextDefaultValues);

interface CartContextProvidersProps {
  children: ReactNode
}

export function CartContextProvider({
  children
}: CartContextProvidersProps) {

  const [cartState, dispatch] = useReducer(cartReducer, { items: [], itemId: null }, initializer);

  useEffect(() => {
    setStorageItem(CART_KEY, cartState);
  }, [cartState]);

  const { items } = cartState

  function addToCart(data: CoffeeType) {

    const hasItemOnCart = items.some(item => {
      return item.id === data.id
    })

    if (hasItemOnCart) {
      return
    }

    const newItem: Cart = {
      id: data.id,
      title: data.name,
      amount: data.amount,
      price: data.price,
      img: data.img,
      total: data.total
    }

    dispatch({
      type: ActionTypes.ADD_NEW_ITEM,
      payload: {
        newItem,
        itemId: newItem.id
      }
    })
    toast.success('Item adicionado ao carrinho')
  }

  function updateCoffeeAmountFromCart(type: 'add' | 'remove', coffeeId: number) {
    dispatch({
      type: ActionTypes.UPDATE_ITEM,
      payload: {
        type,
        coffeeId
      }
    })
  }

  function removeFromCart(newItem: Cart) {

    dispatch({
      type: ActionTypes.DELETE_ITEM,
      payload: {
        newItem
      }
    })
  }

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateCoffeeAmountFromCart }}>
      {children}
    </CartContext.Provider>
  )
}


export function useCart() {
  const context = useContext(CartContext);

  return context
}
