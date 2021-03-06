import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value = 10 }) => {

    const [counter, setCounter] = useState(value) // []

    // handleAdd
    //Incrementar el numero en 1
    const handleAdd = () => {
        setCounter(counter + 1);
        // setCounter((c) => c+1 )
    }
    //handleSubtract
    // Restar el numero en 1
    const handleSubtract = () => {
        setCounter(counter - 1);
    }

    //handleReset
    // devuleve al valor por defecto
    const handleReset = () => {
        setCounter(value);
    }

    return (
        <Fragment>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick={handleSubtract}>-1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleAdd}>+1</button>

        </Fragment>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp