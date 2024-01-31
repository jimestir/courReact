import { useState } from 'react'
function useCounter(initialValue = 10) {
  const [counter, setCounter] = useState(initialValue)

  const increment = (value = 1) => setCounter(counter + value)
  const decrement = (value) => {
    console.log(value)
    if (counter - value < 0) return
    return setCounter(counter - value)
  }
  const reset = () => setCounter(initialValue)

  return {
    counter,
    increment,
    decrement,
    reset
  }
}

export { useCounter }
