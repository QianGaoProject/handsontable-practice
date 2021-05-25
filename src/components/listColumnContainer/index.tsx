import { Canvas, ColumnHeader, Divider, Horizontal } from './style'

import Item from './Item'
import PropsType from './type'
import React from 'react'
import StoreType from '../../types/storeType'
import { connect } from 'react-redux'

const ColumnContainer: React.FC<PropsType> = ({
    search,
    items,
    columns,
}): React.ReactElement => {
    return (
        <Canvas>
            {columns.length > 0 && columns.map((column, index_column) => {
                return (
                    <React.Fragment key={index_column}>
                        <Horizontal>
                            <ColumnHeader >{column.description}</ColumnHeader>
                            {items.length > 0
                                && items.filter(((item) => search === "" || item.description.includes(search)))
                                    .filter((item) => item.column.id === column.id).map((item, index_item) => {
                                        return (
                                            <React.Fragment key={index_item}>
                                                <Item indexItem={index_item} item={{ ...item }} />
                                            </React.Fragment>
                                        )
                                    })}
                        </Horizontal>
                        {columns.length > index_column + 1 && <Divider />}
                    </React.Fragment>
                )
            })}
        </Canvas>
    )
}

const mapStateToProps = (state: StoreType) => {
    return {
        items: state.itemState.items,
        search: state.itemState.search,
        columns: state.columnState.columns
    }
}
export default connect(mapStateToProps, {})(ColumnContainer)
