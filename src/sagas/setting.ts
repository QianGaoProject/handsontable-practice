import { StrictEffect, put, takeLatest } from 'redux-saga/effects'
import {
    UpdateDimensionsAction,
    UpdatedDimensionsAction,
    enumActionType
} from '../types/actionsType'

//workers

function* updateDimensionsWorker({ dimensions }: UpdateDimensionsAction) {
    const data: UpdatedDimensionsAction = {
        type: enumActionType.UPDATED_DIMENSIONS,
        dimensions
    }
    yield put(data)
}



//watchers
export default function* settingSage(): Generator<StrictEffect> {
    yield takeLatest(enumActionType.UPDATE_DIMENSIONS, updateDimensionsWorker)
}

/* https://redux-saga.js.org/docs/api/ */

