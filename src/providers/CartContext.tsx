import { createContext, ReactNode, useContext, useReducer } from 'react'
import { Cart, CoffeeType } from '@/@types/mockes'
import { cartReducer } from "@/reducers/carts/reducers"
import { ActionTypes } from '@/reducers/carts/actions';

interface CartContextType {
  items: Cart[];
  createNewItem: (data: CoffeeType) => void;
  deleteItem: (data: Cart) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProvidersProps {
  children: ReactNode
}

export function CartContextProvider({
  children
}: CartContextProvidersProps) {

  const [cartState, dispatch] = useReducer(cartReducer, {
    items: [],
    itemId: null
  })

  const { items } = cartState

  function createNewItem(data: CoffeeType) {

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
  }

  function deleteItem(newItem: Cart) {

    dispatch({
      type: ActionTypes.DELETE_ITEM,
      payload: {
        newItem
      }
    })
  }

  return (
    <CartContext.Provider value={{ items, createNewItem, deleteItem }}>
      {children}
    </CartContext.Provider>
  )
}


export function useCart() {
  const context = useContext(CartContext);

  return context
}
