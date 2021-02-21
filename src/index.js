import React from "react"
import ReactDOM from "react-dom"

import App from "./app"
import "./styles/styles.scss"

const RenderApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

ReactDOM.render(<RenderApp />, document.getElementById("root"))