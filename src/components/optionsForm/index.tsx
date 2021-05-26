import {
    Button,
    Canvas,
    DropDownContainer,
    DropDownHeader,
    DropDownHeaderText,
    DropDownList,
    Input,
    ListOption,
    SearchContainer,
    SearchInput,
    SearchTitleText
} from "./style"
import { Column, Item } from '../../types/storeType'
import { Search, SortDown, SortUp } from '../common/svgBank'
import { createItem, searchItems } from '../../action'

import PropsType from './type'
import React from 'react'
import StoreType from '../../types/storeType'
import { connect } from 'react-redux'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'

const OptionForm: React.FC<PropsType> = ({
    searchItems,
    createItem,
    items,
    columns,
    screenWidth
}): React.ReactElement => {
    const DEFAULT_OPTION = "OPTIONS"
    const [item, setItem] = React.useState("");

    const [isOpen, setIsOpen] = React.useState(false);
    const [option, setOption] = React.useState({ id: "", description: DEFAULT_OPTION, createdAt: "" });
    const [isSubmit, setIsSubmit] = React.useState(false);
    let handleItem = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItem(e.target.value)
    }
    let handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchItems(e.target.value)
    }
    let handleOption = (opt: Item) => {
        setOption(opt)
        setIsOpen(false)
    }
    let handleSubmit = () => {
        setIsOpen(false)
        setIsSubmit(true)
        columns.length > 0 && onAdd(columns[0], item)
    }
    const toggling = () => setIsOpen(!isOpen);
    let onAdd = (column: Column, description: string) => {
        const data: Item = {
            id: uuidv4(),
            description: description,
            column: column,
            createdAt: moment().format()
        }
        createItem(data)
    }

    return (
        <Canvas>
            
            <Input placeholder="ENTER ITEM" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleItem(e)} />
            {isSubmit && item.length === 0 && <p>Please Enter an item.</p>}
            <Button type="submit" disabled={item.length === 0} onClick={() => handleSubmit()} >ADD OPTIONS</Button>
            <SearchContainer>
                <SearchTitleText>OPTIONS FILTER</SearchTitleText>
                <SearchInput placeholder="SEARCH" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e)} />
                <Search
                    width={screenWidth > 823 ? "25" : "18"}
                    height={screenWidth > 823 ? "50" : "30"}
                    fill="#ffffff"
                    style={{
                        zIndex: "1",
                        position: "absolute",
                        right: screenWidth > 823 ? "25px" : "20px",
                        top: "5px"
                    }}
                    className=""
                />
            </SearchContainer>
           
            
        </Canvas>
    )
}

const mapStateToProps = (state: StoreType) => {
    return {
        items: state.itemState.items,
        columns: state.columnState.columns,
        screenWidth: state.settingState.dimensions.width
    }
}
export default connect(mapStateToProps, {
    searchItems,
    createItem
})(OptionForm)
