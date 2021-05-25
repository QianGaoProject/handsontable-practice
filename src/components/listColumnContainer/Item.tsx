import React, {useRef} from 'react'
import { Row, RowIcon, RowText } from './style'

import { ItemPropsType } from './type'
import StoreType from '../../types/storeType'
import { TimesSquare } from '../common/svgBank'
import { connect } from 'react-redux'
import { deleteItem } from '../../action'
import { useHover } from '../common/useHover'

const Item: React.FC<ItemPropsType> = ({
    deleteItem,
    item,
    indexItem,
    screenWidth
}): React.ReactElement => {

    const hoverRef = useRef(null)
    const isHover = useHover(hoverRef)
    return (
        <Row isOdd={(indexItem + 1) % 2 === 1} isHover={isHover}>
            <RowText>{item.description}</RowText>
            <RowIcon ref={hoverRef} onClick={() => deleteItem(item.id)}>
                <TimesSquare
                    width={screenWidth > 823 ? "42" : "28"}
                    height={screenWidth > 823 ? "24" : "16"}
                    style={{marginTop: screenWidth > 823 ? "20px" : "8.5px"}}
                    fill={isHover ? "#dc3545" : (indexItem + 1) % 2 === 1 ? "#79818f" : "#ffffff"}
                    className=""
                />
            </RowIcon>
        </Row>
    )
}

const mapStateToProps = (state: StoreType) => {
    return {
        columns: state.columnState.columns,
        screenWidth: state.settingState.dimensions.width
    }
}
export default connect(mapStateToProps, {
    deleteItem
})(Item)
