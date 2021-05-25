import { Canvas, ColumnContainer, TextDescription, TextTitle, TitleRectangle } from './style'
import { getColumns, getItems } from '../../action'

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
    getColumns,
}): React.ReactElement => {

    //Fetch data from local strage
    React.useEffect(() => {
        getItems()
        getColumns()
        console.log("mounted")
    }, [getItems, getColumns])

    //componnet did update only
    const didMount = React.useRef(false)
    React.useEffect(() => {
        if(didMount.current){
            // update local storage when an item is added or deleted 
            localStorage.setItem('items', JSON.stringify(items))
            console.log("local storage updated")
        }else{
            didMount.current = true
        }
    },[items.length])
    
    return (
        <Canvas>
            <TextTitle>Handson Table!</TextTitle>
            <TextDescription>Add content to column then relatively update dropdown options</TextDescription>
            <TitleRectangle>DROPDOWN EDITOR</TitleRectangle>
            <ColumnContainer>
                <OptionForm />
                <ListColumnContainer />
            </ColumnContainer>
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
    getItems,
    getColumns
})(TodoPage)
