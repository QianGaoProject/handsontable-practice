import {
    UpdatedDimensionsAction,
    enumActionType
} from "../types/actionsType"

import { Dimensions } from "../types/storeType"
import { Reducer } from "react"

type actions =
    | UpdatedDimensionsAction

interface SettingState {
    dimensions: Dimensions
}
const initialState: SettingState = {
    dimensions: {
        height: window.innerHeight,
        width: window.innerWidth
    }
}
const settingReducer: Reducer<SettingState, actions> = (
    state: SettingState = initialState,
    action
) => {
    switch (action.type) {
        case enumActionType.UPDATED_DIMENSIONS:
            return {
                ...state,
                dimensions: { ...action.dimensions }
            }
        default:
            return { ...state }
    }
}

export default settingReducer