import {

} from "./column";

import { all, call, spawn } from "@redux-saga/core/effects";

import carSaga from "./car";
import columnSaga from "./column";
import itemSaga from "./item";
import settingSaga from "./setting";

export default function* sagas() {
    const sagas = [
        itemSaga,
        columnSaga,
        settingSaga,
        carSaga
    ];

    yield all(sagas.map(saga =>
        spawn(function* () {
            while (true) {
                try {
                    yield call(saga)
                    break
                } catch (e) {
                    console.log(e)
                }
            }
        }))
    );
}

/* https://redux-saga.js.org/docs/advanced/RootSaga/ */