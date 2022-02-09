import React from 'react'

export default function App() {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyBg9S1VTuUbjAV7wYjFoZeJaDnvFJWxvBw`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setData(data)
      })
  }, [])

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
      <p>hello</p>
    </div>
  )
}
