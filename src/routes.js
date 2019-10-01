import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home'

export default function Routes() {
  return (
    <BrowserRouter>
      <div className="main-container">
          <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  )
}