import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useEffect,
} from 'react'
import { Cart, CoffeeType } from '@/@types/mockes'
import { cartReducer, CART_KEY, initializer } from '@/reducers/carts/reducers'
import { ActionTypes } from '@/reducers/carts/actions'
import { setStorageItem } from '@/utils/localStorage'
import { toast } from 'react-toastify'

export interface CartContextType {
  items: Cart[]
  addToCart: (data: CoffeeType) => void
  removeFromCart: (data: Cart) => void
  updateCoffeeAmountFromCart: (type: 'add' | 'remove', coffeeId: number) => void
  cartTotal: number
  cartSubTotal: number
  freight: number
  clearCart: () => void
}

export const cartContextDefaultValues = {
  items: [],
  addToCart: () => null,
  removeFromCart: () => null,
  updateCoffeeAmountFromCart: () => null,
  cartTotal: 0,
  cartSubTotal: 0,
  freight: 0,
  clearCart: () => null,
}

export const CartContext = createContext<CartContextType>(
  cartContextDefaultValues,
)

interface CartContextProvidersProps {
  children: ReactNode
}

const FREIGHT_VALUE = 3.5

export function CartContextProvider({ children }: CartContextProvidersProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    { items: [], itemId: null },
    initializer,
  )

  useEffect(() => {
    setStorageItem(CART_KEY, cartState)
  }, [cartState])

  const { items } = cartState

  function addToCart(data: CoffeeType) {
    const hasItemOnCart = items.some((item) => {
      return item.id === data.id
    })

    if (hasItemOnCart) {
      dispatch({
        type: ActionTypes.UPDATE_ITEM,
        payload: {
          type: 'add',
          coffeeId: data.id,
        },
      })
      toast.success('Item adicionado ao carrinho')
      return
    }

    const newItem: Cart = {
      id: data.id,
      title: data.name,
      amount: 1,
      price: data.price,
      img: data.img,
      total: data.total,
    }

    dispatch({
      type: ActionTypes.ADD_NEW_ITEM,
      payload: {
        newItem,
        itemId: newItem.id,
      },
    })
    toast.success('Item adicionado ao carrinho')
  }

  function updateCoffeeAmountFromCart(
    type: 'add' | 'remove',
    coffeeId: number,
  ) {
    dispatch({
      type: ActionTypes.UPDATE_ITEM,
      payload: {
        type,
        coffeeId,
      },
    })
  }

  function removeFromCart(newItem: Cart) {
    dispatch({
      type: ActionTypes.DELETE_ITEM,
      payload: {
        newItem,
      },
    })
  }

  function clearCart() {
    dispatch({
      type: ActionTypes.CLEAN_ITEMS,
      payload: {},
    })
  }

  const cartSubTotal = items.reduce(
    (accumulator, sum) => accumulator + (sum.total || sum.price),
    0,
  )

  const cartTotal = cartSubTotal + FREIGHT_VALUE

  const freight = FREIGHT_VALUE

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateCoffeeAmountFromCart,
        cartTotal,
        cartSubTotal,
        freight,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  return context
}
