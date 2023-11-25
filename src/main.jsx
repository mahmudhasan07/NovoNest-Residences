import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import('preline')
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Router,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Login from './Components/User/Login.jsx';
import Registration from './Components/User/Registration.jsx';
import Additem from './Components/AddItem/Additem.jsx';
import Home from './Components/Home/Home.jsx';
import Contact from './Components/Contact/Contact.jsx'
import Apartments from './Components/Apartments/Apartments.jsx'
import ContextAPI from './Components/ContextAPI/ContextAPI.jsx'
import DashBoard from './DashBoard/DashBoard.jsx'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/apartments',
        element: <Apartments></Apartments>
      },
      {
        path: '/additems',
        element: <Additem></Additem>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      }
    ]
  },
  {
    path : `/dashboard`,
    element : <DashBoard></DashBoard>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextAPI>
      <RouterProvider router={router}></RouterProvider>
      </ContextAPI>
    </QueryClientProvider>
  </React.StrictMode>,
)
