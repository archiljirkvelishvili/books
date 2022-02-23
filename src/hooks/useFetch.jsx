import { useEffect, useState } from 'react'

export function useFetch(url) {
  const [data, setData] = useState(null)

  useEffect(() => {
    let controller = new AbortController()
    const { signal } = controller
    console.log(controller)
    ;(async () => {
      try {
        const response = await fetch(url, { signal })
        const data = await response.json()
        setData(data.items)
      } catch (error) {
        console.log(error.message)
        throw error
      }
    })()

    return () => {
      controller.abort()
    }
  }, [url])

  return { data }
}
