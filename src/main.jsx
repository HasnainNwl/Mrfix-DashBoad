import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AddForm, Home, Login, Page2 } from './pages'
const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      { path: "", element: <Home /> },
      { path: "add", element: <AddForm /> },
      { path: "page2", element: <Page2 /> },
      { path: "page2/add", element: <AddForm /> },
    ]
  },
  { path: "login", element: <Login /> }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
