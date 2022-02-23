import React from 'react'

import { Booklist } from '../../components/Booklist'
import { useFetch } from '../../hooks/useFetch'
import './home.css'

export function Home() {
  const { data } = useFetch('https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyDNf5oC5ii63zrqDUB0w_F5OSmsmT4mlPc')

  return <div>{data && <Booklist data={data} />}</div>
}
