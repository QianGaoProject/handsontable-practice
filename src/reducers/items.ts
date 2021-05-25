import {
    CreatedItemAction,
    DeletedItemAction,
    GotItemsAction,
    SearchedItemsAction,
    UpdatedItemAction,
    enumActionType
} from "../types/actionsType"

import { Item } from "../types/storeType"
import { Reducer } from "react"

type actions =
    | GotItemsAction
    | CreatedItemAction
    | DeletedItemAction
    | UpdatedItemAction
    | SearchedItemsAction

interface ItemState {
    items: Item[]
    search: string
}

const initialState: ItemState = {
    items: [],
    search: ""
}

const itemReducer: Reducer<ItemState, actions> = (
    state: ItemState = initialState,
    action
) => {
    switch (action.type) {
        case enumActionType.CREATED_ITEM:
            return {
                ...state,
                items: [...state.items, action.item]
            }
        case enumActionType.DELETED_ITEM:
            return {
                ...state,
                items: [...state.items.filter(({ id }) => id !== action.id)]
            }
        case enumActionType.UPDATED_ITEM:
            return {
                ...state,
                items: [...state.items.map(item => item.id === action.item.id ? { ...item, ...action.item } : item)]
            }
        case enumActionType.GOT_ITEMS:
            return {
                ...state,
                items: [...state.items, ...action.items]
            }
        case enumActionType.SEARCHED_ITEMS:
            return {
                ...state,
                search: action.search
            }
        default:
            return { ...state }
    }
}

export default itemReducer