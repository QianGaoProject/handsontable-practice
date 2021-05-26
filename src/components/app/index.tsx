import { Canvas, ColumnContainer, OptionEditorContainer, RowContainer, TextDescription, TextTitle, TitleRectangle } from './style'
import { getCars, getColumns, getItems } from '../../action'

import HandsonTable from '../handsonTable'
import ListColumnContainer from '../listColumnContainer'
import OptionForm from '../optionsForm'
import PropsType from './type'
import React from 'react'
import StoreType from '../../types/storeType'
import WindowResize from '../common/WindowResize'
import { connect } from 'react-redux'

const TodoPage: React.FC<PropsType> = ({
    items,
    getItems,
    getCars,
    getColumns,
}): React.ReactElement => {

    //Fetch data from local strage
    React.useEffect(() => {
        getItems()
        getCars()
        getColumns()
        console.log("mounted")
    }, [getItems, getColumns, getCars])

    //componnet did update only
    const didMount = React.useRef(false)
    React.useEffect(() => {
        if (didMount.current) {
            // update local storage when an item is added or deleted 
            localStorage.setItem('items', JSON.stringify(items))
            console.log("local storage updated: options")
        } else {
            didMount.current = true
        }
    }, [items.length])

    return (
        <Canvas>
            <TextTitle>HandsonTable!</TextTitle>
            <TextDescription>Add or remove content to option list then dropdown will be updated relatively in handsontable</TextDescription>

            <RowContainer>

                <ColumnContainer>
                    <HandsonTable />
                </ColumnContainer>
                <OptionEditorContainer>
                    <TitleRectangle>DROPDOWN EDITOR</TitleRectangle>
                    <ColumnContainer>
                        <OptionForm />
                        <ListColumnContainer />
                    </ColumnContainer>
                </OptionEditorContainer>
            </RowContainer>
            <WindowResize />
        </Canvas>
    )
}


const mapStateToProps = (state: StoreType) => {
    return {
        items: state.itemState.items
    }
}
export default connect(mapStateToProps, {
    getCars,
    getItems,
    getColumns
})(TodoPage)
