import {
    CreatedColumnAction,
    DeletedColumnAction,
    GotColumnsAction,
    UpdatedColumnAction,
    enumActionType
} from "../types/actionsType"

import { Column } from "../types/storeType"
import { Reducer } from "react"

type actions =
    | GotColumnsAction
    | CreatedColumnAction
    | DeletedColumnAction
    | UpdatedColumnAction

interface ColumnState {
    columns: Column[]
}
const initialState: ColumnState = {
    columns: [],
}
const columnReducer: Reducer<ColumnState, actions> = (
    state: ColumnState = initialState,
    action
) => {
    switch (action.type) {
        case enumActionType.CREATED_COLUMN:
            return {
                ...state,
                columns: [...state.columns, action.column]
            }
        case enumActionType.DELETED_COLUMN:
            return {
                ...state,
                columns: [...state.columns.filter(({ id }) => id !== action.id)]
            }
        case enumActionType.UPDATED_COLUMN:
            return {
                ...state,
                columns: [...state.columns.map(column => column.id === action.column.id ? { ...column, ...action.column } : column)]
            }
        case enumActionType.GOT_COLUMNS:
            return {
                ...state,
                columns: [...state.columns, ...action.columns]
            }
        default:
            return { ...state }
    }
}

export default columnReducer