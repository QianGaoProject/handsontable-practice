import PropsType from "./type"
import React from 'react'
import { connect } from 'react-redux'
import { updateDimensions } from '../../../action'

const debounce = <F extends ((...args: any) => any)>(func: F, waitFor: number) => {
    let timeout: number = 0

    const debounced = (...args: any) => {
        clearTimeout(timeout)
        setTimeout(() => func(...args), waitFor)
    }

    return debounced as (...args: Parameters<F>) => ReturnType<F>
}

const WindowResize: React.FC<PropsType> = ({
    updateDimensions
}): any => {
    React.useEffect(() => {
        const debouncedHandleResize = debounce(() => {
            updateDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }, 1000)

        window.addEventListener('resize', debouncedHandleResize)

        return () => {
            window.removeEventListener('resize', debouncedHandleResize)
        }
    })
    return null
}


export default connect(null, {
    updateDimensions
})(WindowResize)