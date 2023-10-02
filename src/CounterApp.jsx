import React, { useState } from 'react'
import { PropTypes } from 'prop-types'

function CounterApp ({ initialValue }) {
  const [value, setValue] = useState(initialValue)
  const increment = () => setValue(value + 1)
  const decrement = () => setValue(value - 1)
  const reset = () => setValue(0)
  return (
    <>
      <div>{value}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export { CounterApp }
CounterApp.protoTypes = {
  initialValue: PropTypes.number.isRequiered
}
