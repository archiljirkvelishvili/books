import { useEffect, useState, useReducer } from 'react'

// const initState = {
//   error: null,
//   loading: false,
// }

// const reducer = (state, action) => {
//   // eslint-disable-next-line default-case
//   switch (action.type) {
//     case 'loading':
//       return {...state, loading: true}
//   }
// }

export function useFetch(url) {
  // const [state, dispach] = useReducer(reducer, initState)

  const [data, setData] = useState(null)
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(null)

  useEffect(() => {
    console.log('ha')
    let controller = new AbortController()
    const { signal } = controller
    console.log(controller)
    ;(async () => {
      try {
        const response = await fetch(url, { signal })
        const data = await response.json()
        console.log(data.items)
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

  console.log(2)

  return { data }
}
