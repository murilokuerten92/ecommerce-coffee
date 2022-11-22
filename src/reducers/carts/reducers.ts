import { produce } from 'immer'
import { Cart } from '@/@types/mockes'

export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
}

interface CartState {
  items: Cart[],
  itemId?: number | null
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM: {

      const currentItemIndex = state.items.findIndex(item => {
        return item.id === action.payload.newItem.id
      })

      if (currentItemIndex >= 0) {
        return state
      }
      return produce(state, draft => {
        draft.items.push(action.payload.newItem),
          draft.itemId = action.payload.newItem.id
      })
    }
    case ActionTypes.UPDATE_ITEM:
      return produce(state, draft => {
        draft.items.push(action.payload.newItem)
      })
    case ActionTypes.DELETE_ITEM: {

      const currentItemIndex = state.items.indexOf(action.payload.newItem.id)

      return produce(state, draft => {
        draft.items.splice(currentItemIndex, 1)
      })
    }
    default:
      return state
  }
}

