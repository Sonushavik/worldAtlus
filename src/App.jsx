import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AppLayout from './components/Layout/AppLayout'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import About from './pages/About'
import Country from './pages/Country'
import Contact from './pages/Contact'
import CountryDetails from './components/Layout/CountryDetails'

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      errorElement : <ErrorPage/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: 'about',
          element: <About/>
        },
        {
          path: 'country',
          element: <Country/>
        },
        {
          path: 'country/:id',
          element: <CountryDetails/>
        },
        {
          path: "contact",
          element: <Contact/>
        }
      ]
    }
  ])
const App = () => {
  return <RouterProvider router={router}></RouterProvider>
};

export default App
