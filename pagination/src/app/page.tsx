'use client'
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState<data>()
  const [isLoading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  const fetchData = async () => {
    const res = await fetch('https://dummyjson.com/products?limit=100')
    const data: data = await res.json()
    if (data && data.products) {
      setData(data)
      setLoading(false)
    }
  }
  useEffect(() => {
    setLoading(true)
    fetchData()
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  const content = data.products?.slice(page * 10 - 10, page * 10).map((product) => (
    <div key={product.id} className='Product'>
      <span>{product.title}</span>
      <img className='Product-Image' src={product.thumbnail} alt={product.title} />
    </div>
  ))

  const handlePagination = (work: string) => {
    if (page > 1 && work === 'prev') {
      setPage(page - 1)
    }
    if (page < 10 && work === 'next') {
      setPage(page + 1)
    }
  }
  return (
    <div className='Main'>
      <div className='Product-Page'>{content}</div>
      <div className='button__section'>
        <button
          className={`button ${page === 1 ? 'hideBtn' : ''}`}
          onClick={() => handlePagination('prev')}>
          Previous
        </button>
        <span>{page}</span>
        <button
          className={`button ${page === 10 ? 'hideBtn' : ''}`}
          onClick={() => handlePagination('next')}>
          Next
        </button>
      </div>
    </div>
  )
}
