import useFetch from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'
import { Quote } from './Quote'

function useLayoutEffect () {
  const { counter, increment } = useCounter(1)

  const { data, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
  const { quote, author } = !!data && data[0]

  return (
    <>

      <h1 className='p-2'>Breaking Bad Quote</h1>
      <hr />
      {
      isLoading
        ? (
          <p className='m-4 p-4 bg-success rounded'>Loading...</p>
          )
        : (
          <Quote quote={quote} author={author} />
          )
     }
      <button className='mx-4 -my-2 btn btn-success' onClick={() => increment(1)} disabled={isLoading}>New quote</button>
    </>
  )
}

export default useLayoutEffect
