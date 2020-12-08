import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

import UserContext from "./context/userContext.js"

import App from "./App"

import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContext>
        <App />
      </UserContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
