import {
    GetColumnsActionCreator,
    GetItemsActionCreator,
} from '../../types/actionsType'

import { Item } from '../../types/storeType'

interface PropsType {
    items: Item[]
    getItems: GetItemsActionCreator
    getColumns: GetColumnsActionCreator
}

export default PropsType