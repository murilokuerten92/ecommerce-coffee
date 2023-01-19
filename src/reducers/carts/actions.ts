import { Cart } from '@/@types/mockes'

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

export function addNewItemAction(newItem: Cart) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      newItem,
    },
  }
}

export function updateItemAction(newItem: Cart) {
  return {
    type: ActionTypes.UPDATE_ITEM,
    payload: {
      newItem,
    },
  }
}

export function deleteItemAction(newItem: Cart) {
  return {
    type: ActionTypes.DELETE_ITEM,
    payload: {
      newItem,
    },
  }
}

export function cleanItemAction() {
  return {
    type: ActionTypes.CLEAN_ITEMS,
    payload: {},
  }
}
