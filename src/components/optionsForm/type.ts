import { Column, Item } from '../../types/storeType'
import {
    CreateItemActionCreator,
    SearchItemsActionCreator
} from '../../types/actionsType'

interface PropsType {
    items: Item[]
    columns: Column[]
    screenWidth: number
    createItem: CreateItemActionCreator
    searchItems: SearchItemsActionCreator
}

export interface DropDownHeaderType {
    isOpen: boolean
}

export default PropsType