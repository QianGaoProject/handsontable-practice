import { Car, Column, Item } from '../../types/storeType'
import {
    DeleteItemActionCreator,
    UpdateCarsActionCreator,
} from '../../types/actionsType'

interface PropsType {
    search: string
    items: Item[]
    columns: Column[]
}

export interface ItemPropsType {
    indexItem: number
    item: Item
    screenWidth: number
    cars: Car[]
    updateCars: UpdateCarsActionCreator
    deleteItem: DeleteItemActionCreator
}


export interface RowType {
    isOdd: boolean
    isHover: boolean
}

export default PropsType