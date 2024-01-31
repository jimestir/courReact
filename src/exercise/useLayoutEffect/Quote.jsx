import { useLayoutEffect, useRef, useState } from 'react'
export function Quote ({ quote, author }) {
  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({
    width: 0, height: 0
  })
  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect()
    setBoxSize({
      width,
      height
    })
  }, [quote])

  return (
    <>
      <figure className='bg-warning rounded m-4 p-2 text-center' key={quote}>
        <blockquote style={{ display: 'flex' }} className='blockquote m-2  p-2 rounded'>
          <p ref={pRef}>{quote}</p>
        </blockquote>
        <figcaption class='blockquote-footer'>
          <cite title='Source Title'>{author}</cite>
        </figcaption>

      </figure>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  )
};
