import { useRef } from 'react'

function UseRef() {
  const ref = useRef()

  const onfocus = () => {
    console.log(ref)
    ref.current.select()
  }
  return (
    <>
      <input type='text' />
      <input id='soy' type='text' />
      <input type='text' />
      <input type='text' />
      <input type='text' />
      <input type='text' />
      <input ref={ref} id='capullo' type='text' />
      <input type='text' />
      <button onClick={onfocus}>press</button>

    </>
  )
}

export default UseRef
