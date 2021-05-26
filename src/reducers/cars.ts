import {
    GotCarsAction,
    UpdatedCarsAction,
    enumActionType
} from "../types/actionsType"

import { Car } from "../types/storeType"
import { Reducer } from "react"

type actions =
    | GotCarsAction
    | UpdatedCarsAction

interface CarState {
    cars: Car[]
}
const initialState: CarState = {
    cars: [],
}
const carReducer: Reducer<CarState, actions> = (
    state: CarState = initialState,
    action
) => {
    switch (action.type) {
        case enumActionType.UPDATED_CARS:
            return {
                ...state,
                cars: [...action.cars]
            }
        case enumActionType.GOT_CARS:
            return {
                ...state,
                cars: [...state.cars, ...action.cars]
            }
        default:
            return { ...state }
    }
}

export default carReducer