import { Column, Dimensions, Item } from "../types/storeType"
import {
    CreateColumnActionCreator,
    CreateItemActionCreator,
    DeleteColumnActionCreator,
    DeleteItemActionCreator,
    GetColumnsActionCreator,
    GetItemsActionCreator,
    SearchItemsActionCreator,
    UpdateDimensionsActionCreator,
    enumActionType,
} from '../types/actionsType'

/* For item */
export const createItem: CreateItemActionCreator = (item: Item) => {
    return {
        type: enumActionType.CREATE_ITEM,
        item
    }
}

export const getItems: GetItemsActionCreator = () => {
    return {
        type: enumActionType.GET_ITEMS
    }
}

export const deleteItem: DeleteItemActionCreator = (id: string) => {
    return {
        type: enumActionType.DELETE_ITEM,
        id
    }
}

export const searchItems: SearchItemsActionCreator = (search: string) => {
    return {
        type: enumActionType.SEARCH_ITEMS,
        search
    }
}

/* For column */
export const createColumn: CreateColumnActionCreator = (column: Column) => {
    return {
        type: enumActionType.CREATE_COLUMN,
        column
    }
}

export const getColumns: GetColumnsActionCreator = () => {
    return {
        type: enumActionType.GET_COLUMNS
    }
}

export const deleteColumn: DeleteColumnActionCreator = (id: string) => {
    return {
        type: enumActionType.DELETE_COLUMN,
        id
    }
}

/* For setting */

export const updateDimensions: UpdateDimensionsActionCreator = (dimensions: Dimensions) => {
    return {
        type: enumActionType.UPDATE_DIMENSIONS,
        dimensions
    }
}