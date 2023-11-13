import { useEffect, useState } from 'react'

function useFetch(API) {
  const [data, setData] = useState({
    data: null,
    isLoading: true,
    hasError: null
  })

  const getFetch = async () => {
    try {
      setData({
        ...data,
        isLoading: true
      })

      const request = await fetch(API)
      const DATA = await request.json()
      setData({
        data: DATA,
        isLoading: false,
        hasError: null
      })
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getFetch()
  }, [API])

  return {
    ...data
  }
}

export default useFetch
