import React from 'react'
import FirstApp from './FirstApp'
import { CounterApp } from './CounterApp'
import MultipleCustomHooks from './exercise/MultipleCustomHooks'
import UseRef from './exercise/05-UseRef'

function App () {
  return (
    <>
      {/* <MultipleCustomHooks /> */}
      <UseRef />
      {/* <FirstApp /> */}
      {/* <CounterApp initialValue={100} /> */}
    </>
  )
}

export default App
