import { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Spam } from '../06-exercise/Spam'

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000)
  const [show, setShow] = useState(false)
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
      <div className='m-2 p-2'>Counter: <Spam counter={counter} /></div>
      <hr />
      <button className='btn btn-primary m-4' onClick={() => increment(1)}>+1</button>
      <button className='btn btn-warning' onClick={() => setShow(!show)}>Press/button {JSON.stringify(show)}</button>
      <h4>{memorizedValue}</h4>
    </>
  )
}
function heavyStuff(iterationNumber = 500) {
  for (let i = 0; i < iterationNumber; i++) {
    // console.log('Ahi Vamos...')
  }
  return `${iterationNumber} iteraciones realizadas`
}
