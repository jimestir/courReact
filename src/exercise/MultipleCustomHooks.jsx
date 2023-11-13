import useFetch from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'

function MultipleCustomHooks () {
  const { counter, increment } = useCounter(1)

  const { data, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
  const { quote, author } = !!data && data[0]
  return (
    <>

      <h1 className='p-2'>Breacking Bad Quotet</h1>
      <hr />
      {
      isLoading
        ? (
          <p className='m-4 p-4 bg-success rounded'>Loading...</p>
          )
        : (

          <figure className='bg-warning rounded m-4 p-2 text-center' key={quote}>
            <blockquote className='blockquote m-2  p-2 rounded'>
              <p>{quote}</p>
            </blockquote>
            <figcaption class='blockquote-footer'>
              <cite title='Source Title'>{author}</cite>
            </figcaption>

          </figure>
          )
     }
      <button className='mx-4 -my-2 btn btn-success' onClick={() => increment(1)} disabled={isLoading}>New quote</button>
    </>
  )
}

export default MultipleCustomHooks
