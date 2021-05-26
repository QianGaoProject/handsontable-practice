import {
    GetCarsActionCreator,
    GetColumnsActionCreator,
    GetItemsActionCreator,
} from '../../types/actionsType'

import { Item } from '../../types/storeType'

interface PropsType {
    items: Item[]
    getCars: GetCarsActionCreator
    getItems: GetItemsActionCreator
    getColumns: GetColumnsActionCreator
}

export default PropsType