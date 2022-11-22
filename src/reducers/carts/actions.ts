import { Cart } from '@/@types/mockes'

export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
}

export function addNewItemAction(newItem: Cart) {

  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      newItem
    }
  }
}

export function updateItemAction(newItem: Cart) {

  return {
    type: ActionTypes.UPDATE_ITEM,
    payload: {
      newItem
    }
  }
}

export function deleteItemAction(newItem: Cart) {

  return {
    type: ActionTypes.DELETE_ITEM,
    payload: {
      newItem
    }
  }
}
