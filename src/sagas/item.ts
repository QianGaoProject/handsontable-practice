import {
    CreateItemAction,
    CreatedItemAction,
    DeleteItemAction,
    DeletedItemAction,
    GotItemsAction,
    SearchItemsAction,
    SearchedItemsAction,
    enumActionType
} from '../types/actionsType'
import { StrictEffect, put, takeEvery, takeLatest } from 'redux-saga/effects'

//workers
function* searchItemWorker({ search }: SearchItemsAction) {
    const data: SearchedItemsAction = {
        type: enumActionType.SEARCHED_ITEMS,
        search: search
    }
    yield put(data)
}

function* createItemWorker({ item }: CreateItemAction) {
    // create item using api 
    // --ignore
    // update our redux store by dispatching a new action
    const data: CreatedItemAction = {
        type: enumActionType.CREATED_ITEM,
        item: item
    }
    yield put(data)
}

function* deleteItemWorker({ id }: DeleteItemAction) {
    const data: DeletedItemAction = {
        type: enumActionType.DELETED_ITEM,
        id
    }
    yield put(data)
}

function* getItemsWorker() {
    //fetch items from local storage
    let items_localStorage = localStorage.getItem('items')
    if (items_localStorage !== null && items_localStorage !== "") {
        const data: GotItemsAction = {
            type: enumActionType.GOT_ITEMS,
            items: JSON.parse(items_localStorage as string)
        }
        yield put(data)
    }
}


//watchers

export default function* itemSaga(): Generator<StrictEffect> {
    yield takeLatest(enumActionType.SEARCH_ITEMS, searchItemWorker)
    yield takeLatest(enumActionType.CREATE_ITEM, createItemWorker)
    yield takeLatest(enumActionType.DELETE_ITEM, deleteItemWorker)
    yield takeEvery(enumActionType.GET_ITEMS, getItemsWorker)
}

/* https://redux-saga.js.org/docs/api/ */

