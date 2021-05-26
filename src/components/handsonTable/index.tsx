import { Car } from '../../types/storeType'
import { HotTable } from '@handsontable/react';
import PropsType from './type'
import React from 'react';
import StoreType from '../../types/storeType'
import { connect } from 'react-redux'
import { updateCars } from '../../action/index'

const HandsonTable: React.FC<PropsType> = ({
  items,
  cars,
  updateCars
}): React.ReactElement => {
  const [settings, setSettings] = React.useState({})

  /* updating if options modified 
    carsArrays: two dimensional array
    carsObjects: an array-object structure
  */
  React.useEffect(() => {
    const carsArrays: string[][] = []
    cars.filter((car) => {
      const carArr = Object.values(car)
      // remove id of car
      carArr.shift()
      carsArrays.push(carArr)
    })

    setSettings({
      data: carsArrays,
      afterChange: (changes: any) => {
        if (changes !== null && changes[0] !== undefined) {
          const carsObjects: Car[] = []
          carsArrays.map((car, index_car) => {
            const data: Car = {
              id: index_car.toString(),
              car: car[0],
              model: car[1],
              year: car[2],
              color: car[3],
            }
            carsObjects.push(data)
          })
          // update local storage 
          localStorage.setItem('cars', JSON.stringify(carsObjects))
          console.log("local storage updated: handsonTable")
          //update redux
          updateCars(carsObjects)

        }
      },
      width: 600,
      height: 500,
      colHeaders: ['Car', 'Model', 'Year', 'Color'],
      columns: [
        {
          width: 200,
          type: 'text'
        },
        {
          width: 100,
          type: 'text'
        },
        {
          width: 100,
          type: 'date', 
          dateFormat: 'YYYY'
        },
        {
          width: 200,
          type: 'dropdown',
          allowInvalid: false,
          source: Array.from(new Set(items.map(item => item.description)))
        }
      ]
    })

  }, [items.length, cars])

  return (
    <HotTable settings={settings} licenseKey={'non-commercial-and-evaluation'} />
  )
}


const mapStateToProps = (state: StoreType) => {
  return {
    items: state.itemState.items,
    cars: state.carState.cars
  }
}
export default connect(mapStateToProps, {
  updateCars
})(HandsonTable)


/* https://handsontable.com/docs/8.4.0/tutorial-cell-types.html */