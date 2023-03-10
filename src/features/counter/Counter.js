import React from 'react'
import { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice'


const Counter = () => {
    // read data from store using useSelector
    const count = useSelector((state) => state.counter.count)

    // dispatch actions using useDispatch
    const dispatch = useDispatch()

    const [incrementAmount, setIncrementAmount] = useState(0)

    const addValue = Number(incrementAmount) || 0

    const resetAll = () => {
        setIncrementAmount(0)
        dispatch(reset())
    }

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

            <input
                type="text"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />

            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
                <button onClick={resetAll}>Reset</button>
            </div>
        </div>
    )
}

export default Counter