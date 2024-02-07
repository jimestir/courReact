import { memo } from 'react'
export const ShowIncrement = memo(({ increment }) => {
  // console.log('me volvi a renderizar')
  return (

    <button onClick={increment} className='btn btn-primary'>+1</button>
  )
})
