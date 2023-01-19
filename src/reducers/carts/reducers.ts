import { produce } from 'immer'
import { Cart } from '@/@types/mockes'
import { getStorageItem } from '@/utils/localStorage'

export const CART_KEY = 'cartItems'

export enum ActionTypes {
  // eslint-disable-next-line no-unused-vars
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  // eslint-disable-next-line no-unused-vars
  UPDATE_ITEM = 'UPDATE_ITEM',
  // eslint-disable-next-line no-unused-vars
  DELETE_ITEM = 'DELETE_ITEM',
  // eslint-disable-next-line no-unused-vars
  CLEAN_ITEMS = 'CLEAN_ITEMS',
}

export interface CartState {
  items: Cart[]
  itemId?: number | null
}

const initialState: CartState = {
  items: [],
  itemId: null,
}

export const initializer = (initialValue = initialState) =>
  getStorageItem(CART_KEY) || initialValue

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM: {
      return produce(state, (draft) => {
        // eslint-disable-next-line no-unused-expressions, no-sequences
        draft.items.push(action.payload.newItem),
          (draft.itemId = action.payload.newItem.id)
      })
    }

    case ActionTypes.UPDATE_ITEM: {
      const cartItems = [...state.items]

      const cartItemsParsed = cartItems?.map((coffeItem) => {
        if (action.payload.coffeeId === coffeItem.id) {
          const AddRemoveItemAmount =
            action.payload.type === 'add'
              ? coffeItem.amount + 1
              : coffeItem.amount - 1
          const updatedItem = {
            ...coffeItem,
            amount: AddRemoveItemAmount,
            total: coffeItem.price * AddRemoveItemAmount,
          }
          return { ...updatedItem }
        }

        return coffeItem
      })

      return produce(state, (draft) => {
        draft.items = cartItemsParsed
      })
    }
    case ActionTypes.DELETE_ITEM: {
      const currentItemIndex = state.items.indexOf(action.payload.newItem.id)

      return produce(state, (draft) => {
        draft.items.splice(currentItemIndex, 1)
      })
    }
    case ActionTypes.CLEAN_ITEMS: {
      return initialState
    }
    default:
      return state
  }
}
