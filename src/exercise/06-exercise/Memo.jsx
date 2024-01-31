import { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Spam } from './Spam'

export const Memo = () => {
  const { counter, increment } = useCounter(0)
  const [show, setShow] = useState(false)

  return (
    <>
      <div className='m-2 p-2'>Counter: <Spam counter={counter} /></div>
      <button className='btn btn-primary m-4' onClick={() => increment(1)}>+1</button>
      <button className='btn btn-warning' onClick={() => setShow(!show)}>Press/button {JSON.stringify(show)}</button>
    </>
  )
}
