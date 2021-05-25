import columnReducer from './columns'
import { combineReducers } from "redux"
import itemReducer from './items'
import settingReducer from './settings'

const reducers = combineReducers({
    itemState: itemReducer,
    columnState: columnReducer,
    settingState: settingReducer,
})

export default reducers