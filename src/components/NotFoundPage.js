import React from "react"
import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div className="center-block">
      <div className="notfound__card">
        <p className="notfound__head">Ooops! Page not found.</p>
        <p className="notfound__text">We can't find what you are looking for.</p>
        <div className="notfound__btn">
          <Link to="/" className="notfound__link">Go back home</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage