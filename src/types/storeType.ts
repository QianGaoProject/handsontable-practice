
export type Car = {
    id: string
    car: string
    model: string
    year: string
    color: string
}
export type Item = {
    id: string
    description: string
    column: Column
    createdAt: string
}

export type Column = {
    id: string
    description: string
    createdAt: string
}
export type Dimensions = {
    width: number
    height: number
}

type CarStateType = {
    cars: Car[]
}
type ItemStateType = {
    items: Item[]
    search: string
}
type ColumnStateType = {
    columns: Column[]
}
type SettingStateType = {
    dimensions: Dimensions
}
interface StoreType {
    carState: CarStateType
    itemState: ItemStateType
    columnState: ColumnStateType
    settingState: SettingStateType
}


export default StoreType