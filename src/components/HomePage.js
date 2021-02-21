import React, { useEffect, useState } from "react"
import { getAPOD } from "../apis/nasa"
import LoadingPage from './LoadingPage'

const HomePage = () => {

  const [error, setError] = useState(null)
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(async () => {
    setLoading(true)

    const [res, err] = await getAPOD()

    if (err != null) {
      setError(err)
    }

    setResults(res)
    setLoading(false)

  }, [])

  if (loading) {
    return <LoadingPage />
  }

  if (error) {
    return (
      <div className="center-block">
        <p className="error">{error}</p>
      </div>
    )
  }

  return (
    <div className="home">
      <div className="card">
        {results && results.length > 0 && (
          results.map(res => {
            if (res.media_type === "image") {
              return (
                <div className="card__body" key={res.date}>
                  <div className="card__header">
                    <p className="card__title">{res.title}</p>
                    <p className="card__date">{res.date}</p>
                  </div>
                  <img src={res.url} alt={res.title} className="card__image" />
                </div>
              )
            }
          })
        )}
      </div>
    </div>
  )
}

export default HomePage