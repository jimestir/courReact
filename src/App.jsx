import React from 'react'
import FirstApp from './FirstApp'
import { CounterApp } from './CounterApp'

function App () {
  return (
    <>
      <FirstApp />
      <CounterApp initialValue={100} />
    </>
  )
}

export default App
