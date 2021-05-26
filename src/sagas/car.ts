import {
    GotCarsAction,
    UpdateCarsAction,
    UpdatedCarsAction,
    enumActionType
} from '../types/actionsType'
import { StrictEffect, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { Car } from "../types/storeType"

//workers

function* updateCarWorker({ cars }: UpdateCarsAction) {
    const data: UpdatedCarsAction = {
        type: enumActionType.UPDATED_CARS,
        cars
    }
    yield put(data)
}


function* getCarsWorker() {
    //fetch items from local storage
    let cars_localStorage = localStorage.getItem('cars')
    if (cars_localStorage !== null && cars_localStorage !== "") {
        const data: GotCarsAction = {
            type: enumActionType.GOT_CARS,
            cars: JSON.parse(cars_localStorage as string)
        }
        yield put(data)
    } else {
        const initTable: Car[] = [
            { id: "0", car: "Mercedes", model: "A 160", year: "2017", color: "" },
            { id: "1", car: "Citroen", model: "C4 Coupe", year: "2018", color: "" },
            { id: "2", car: "Audi", model: "A4 Avant", year: "2019", color: "" },
            { id: "3", car: "Opel", model: "Astra", year: "2020", color: "" },
            { id: "4", car: "BMW", model: "320i Coupe", year: "2020", color: "" }
        ]
        const data: GotCarsAction = {
            type: enumActionType.GOT_CARS,
            cars: initTable
        }
        yield put(data)


    }
}

//watchers
export default function* settingSaga(): Generator<StrictEffect> {
    yield takeLatest(enumActionType.UPDATE_CARS, updateCarWorker)
    yield takeEvery(enumActionType.GET_CARS, getCarsWorker)
}