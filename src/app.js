import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import HomePage from "./components/HomePage"
import NotFoundPage from "./components/NotFoundPage"

const App = () => {
  return (
  <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App