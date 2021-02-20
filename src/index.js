import React from "react"
import ReactDOM from "react-dom"

import "./styles/styles.scss"

const App = () => (
  <React.StrictMode>
    <div>Hello, app!</div>
  </React.StrictMode>
)

ReactDOM.render(<App />, document.getElementById("root"))