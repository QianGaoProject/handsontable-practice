import { Car, Item } from '../../types/storeType'

import {
    UpdateCarsActionCreator,
} from '../../types/actionsType'

interface PropsType {
    items: Item[]
    cars: Car[]
    screenWidth: number
    updateCars: UpdateCarsActionCreator
}

export default PropsType