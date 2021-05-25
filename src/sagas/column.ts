import {
    CreateColumnAction,
    CreatedColumnAction,
    DeleteColumnAction,
    DeletedColumnAction,
    GotColumnsAction,
    enumActionType
} from '../types/actionsType'
import { DELAY_QUARTER_SECOND, delay } from '../types/actionsType'
import { StrictEffect, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { Column } from '../types/storeType'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'

//workers
function* createColumnWorker({ column }: CreateColumnAction) {

    yield delay(DELAY_QUARTER_SECOND)
    // create column using api 
    // --ignore
    // update our redux store by dispatching a new action
    const data: CreatedColumnAction = {
        type: enumActionType.CREATED_COLUMN,
        column: column
    }
    yield put(data)
}

function* deleteColumnWorker({ id }: DeleteColumnAction) {
    const data: DeletedColumnAction = {
        type: enumActionType.DELETED_COLUMN,
        id
    }
    yield put(data)
}

function* getColumnsWorker() {
    //fetch items from local storage
    let columns_localStorage = localStorage.getItem('columns')
    if (columns_localStorage !== null && columns_localStorage !== "") {
        const data: GotColumnsAction = {
            type: enumActionType.GOT_COLUMNS,
            columns: JSON.parse(columns_localStorage as string)
        }
        yield put(data)
    } else {
        // init 2 columns 
        const FirstColumn: Column = {
            id: uuidv4(),
            description: "OPTIONS",
            createdAt: moment().format()
        }
        const data: GotColumnsAction = {
            type: enumActionType.GOT_COLUMNS,
            columns: [...[], 
            FirstColumn
        ]
        }
        //add to redux store
        yield put(data)

        // add to local storage
        localStorage.setItem('columns', JSON.stringify([...[], FirstColumn]))
    }
}


//watchers
export default function* columnSage(): Generator<StrictEffect> {
    yield takeLatest(enumActionType.CREATE_COLUMN, createColumnWorker)
    yield takeEvery(enumActionType.DELETE_COLUMN, deleteColumnWorker)
    yield takeEvery(enumActionType.GET_COLUMNS, getColumnsWorker)
}

/* https://redux-saga.js.org/docs/api/ */

