import { Column, Item } from '../../types/storeType'

import {
    DeleteItemActionCreator,
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
    deleteItem: DeleteItemActionCreator
}


export interface RowType {
    isOdd: boolean
    isHover: boolean
}

export default PropsType