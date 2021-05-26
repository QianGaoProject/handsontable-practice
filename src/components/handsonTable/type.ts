import { Car, Item } from '../../types/storeType'

import {
    UpdateCarsActionCreator,
} from '../../types/actionsType'

interface PropsType {
    items: Item[]
    cars: Car[]
    updateCars: UpdateCarsActionCreator
}

export default PropsType