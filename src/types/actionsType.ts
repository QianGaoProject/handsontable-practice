import { Column, Dimensions, Item } from "./storeType"

export enum enumActionType {
    /* For action creator */
    CREATE_ITEM = "CREATE_ITEM",
    DELETE_ITEM = "DELETE_ITEM",
    UPDATE_ITEM = "UPDATE_ITEM",
    GET_ITEMS = "GET_ITEMS",
    SEARCH_ITEMS = "SEARCH_ITEMS",
    /* For reducer */
    CREATED_ITEM = "CREATED_ITEM",
    DELETED_ITEM = "DELETED_ITEM",
    UPDATED_ITEM = "UPDATED_ITEM",
    GOT_ITEMS = "GOT_ITEMS",
    SEARCHED_ITEMS = "SEARCHED_ITEMS",


    /* For action creator */
    CREATE_COLUMN = "CREATE_COLUMN",
    DELETE_COLUMN = "DELETE_COLUMN",
    UPDATE_COLUMN = "UPDATE_COLUMN",
    GET_COLUMNS = "GET_COLUMNS",
    /* For reducer */
    CREATED_COLUMN = "CREATED_COLUMN",
    DELETED_COLUMN = "DELETED_COLUMN",
    UPDATED_COLUMN = "UPDATED_COLUMN",
    GOT_COLUMNS = "GOT_COLUMNS",

    
    /* For action creator */
    UPDATE_DIMENSIONS = "UPDATE_DIMENSIONS",
    /* For reducer */
    UPDATED_DIMENSIONS = "UPDATED_DIMENSIONS"
}

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export const DELAY_ONE_SECOND = 1000
export const DELAY_QUARTER_SECOND = 250

/* For item */
/* For action creator  */
export interface GetItemsAction {
    type: enumActionType.GET_ITEMS
}

export interface DeleteItemAction {
    type: enumActionType.DELETE_ITEM
    id: string
}

export interface CreateItemAction {
    type: enumActionType.CREATE_ITEM
    item: Item
}

export interface UpdateItemAction {
    type: enumActionType.UPDATE_ITEM
    item: Item
}

export interface SearchItemsAction {
    type: enumActionType.SEARCH_ITEMS
    search: string
}

export type GetItemsActionCreator = () => GetItemsAction
export type DeleteItemActionCreator = (id: string) => DeleteItemAction
export type CreateItemActionCreator = (item: Item) => CreateItemAction
export type UpdateItemActionCreator = (item: Item) => UpdateItemAction
export type SearchItemsActionCreator = (search: string) => SearchItemsAction


/* For Reducers */
export interface GotItemsAction {
    type: enumActionType.GOT_ITEMS
    items: Item[]
}

export interface CreatedItemAction {
    type: enumActionType.CREATED_ITEM,
    item: Item
}

export interface DeletedItemAction {
    type: enumActionType.DELETED_ITEM,
    id: string
}

export interface UpdatedItemAction {
    type: enumActionType.UPDATED_ITEM
    item: Item
}

export interface SearchedItemsAction {
    type: enumActionType.SEARCHED_ITEMS
    search: string
}



/* For column */
/* For action creator  */
export interface GetColumnsAction {
    type: enumActionType.GET_COLUMNS
}

export interface DeleteColumnAction {
    type: enumActionType.DELETE_COLUMN
    id: string
}

export interface CreateColumnAction {
    type: enumActionType.CREATE_COLUMN
    column: Column
}

export interface UpdateColumnAction {
    type: enumActionType.UPDATE_COLUMN
    column: Column
}
export type GetColumnsActionCreator = () => GetColumnsAction
export type DeleteColumnActionCreator = (id: string) => DeleteColumnAction
export type CreateColumnActionCreator = (column: Column) => CreateColumnAction
export type UpdateColumnActionCreator = (column: Column) => UpdateColumnAction


/* For Reducers */
export interface GotColumnsAction {
    type: enumActionType.GOT_COLUMNS
    columns: Column[]
}

export interface CreatedColumnAction {
    type: enumActionType.CREATED_COLUMN,
    column: Column
}

export interface DeletedColumnAction {
    type: enumActionType.DELETED_COLUMN,
    id: string
}

export interface UpdatedColumnAction {
    type: enumActionType.UPDATED_COLUMN
    column: Column
}




/* For setting */
/* For action creator  */
export interface UpdateDimensionsAction {
    type: enumActionType.UPDATE_DIMENSIONS
    dimensions: Dimensions
}

export type UpdateDimensionsActionCreator = (dimensions: Dimensions) => UpdateDimensionsAction


/* For Reducers */
export interface UpdatedDimensionsAction {
    type: enumActionType.UPDATED_DIMENSIONS
    dimensions: Dimensions
}
