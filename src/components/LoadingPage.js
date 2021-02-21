import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

const LoadingPage = () => {
  return (
    <div className="center-block">
      <FontAwesomeIcon icon={faSpinner} className="icon-fa-spinner" />
    </div>
  )
}

export default LoadingPage