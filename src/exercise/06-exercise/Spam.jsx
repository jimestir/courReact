import { memo } from 'react'

export const Spam = memo(({ counter }) => {
  console.log('Me he renderizado :c')
  return <span>{counter}</span>
})
