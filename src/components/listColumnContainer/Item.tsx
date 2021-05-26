import React, { useRef } from 'react'
import { Row, RowIcon, RowText } from './style'
import { deleteItem, updateCars } from '../../action'

import { Car } from '../../types/storeType'
import { ItemPropsType } from './type'
import { Item as ItemType } from '../../types/storeType'
import StoreType from '../../types/storeType'
import { TimesSquare } from '../common/svgBank'
import { connect } from 'react-redux'
import { useHover } from '../common/useHover'

const Item: React.FC<ItemPropsType> = ({
    deleteItem,
    updateCars,
    cars,
    item,
    indexItem,
    screenWidth
}): React.ReactElement => {

    const hoverRef = useRef(null)
    const isHover = useHover(hoverRef)
    const handleDelete = (item: ItemType) => {
        // deep copy
        const data = JSON.parse(JSON.stringify(cars))
        data.map((car: Car) => {
            if (car.color === item.description) {
                car.color = ""
            }
        })
        // update the cars 
        updateCars(data)
        // update the redux item
        deleteItem(item.id)
        // update local storage 
        localStorage.setItem('cars', JSON.stringify(data))
        console.log("local storage updated: handsonTable")

    }
    return (
        <Row isOdd={(indexItem + 1) % 2 === 1} isHover={isHover}>
            <RowText>{item.description}</RowText>
            <RowIcon ref={hoverRef} onClick={() => handleDelete(item)}>
                <TimesSquare
                    width={screenWidth > 823 ? "42" : "28"}
                    height={screenWidth > 823 ? "24" : "16"}
                    style={{ marginTop: screenWidth > 823 ? "20px" : "8.5px" }}
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
        screenWidth: state.settingState.dimensions.width,
        cars: state.carState.cars
    }
}
export default connect(mapStateToProps, {
    deleteItem,
    updateCars
})(Item)
