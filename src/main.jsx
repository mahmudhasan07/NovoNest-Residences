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
import MyProfile from './DashBoard/MyProfile/MyProfile.jsx'
import MakePayment from './DashBoard/MemberRoute/MakePayment.jsx'
import MembersRoute from './Components/Routes/MembersRoute.jsx'
import PaymentHistory from './DashBoard/MemberRoute/PaymentHistory.jsx'
import ManageMember from './DashBoard/AdminRoute/ManageMember.jsx'
import AgreementReq from './DashBoard/AdminRoute/AgreementReq.jsx'
import ManageCoupon from './DashBoard/AdminRoute/ManageCoupon.jsx'
import AdminRoute from './Components/Routes/AdminRoute.jsx'

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
    element : <DashBoard></DashBoard>,
    children: [
      {
        path : `/dashboard/my-profile`,
        element : <MyProfile></MyProfile>
      },
      {
        path : `/dashboard/make-payment`,
        element : <MembersRoute><MakePayment></MakePayment></MembersRoute>
      },
      {
        path : `/dashboard/payment-history`,
        element : <PaymentHistory></PaymentHistory>
      },
      {
        path : '/dashboard/manage-members',
        element : <AdminRoute><ManageMember></ManageMember></AdminRoute>
      },
      {
        path : `/dashboard/agreement-request`,
        element : <AdminRoute><AgreementReq></AgreementReq></AdminRoute>
      },
      {
        path : `/dashboard/manage-coupon`,
        element : <AdminRoute><ManageCoupon></ManageCoupon></AdminRoute>
      },
    ]
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
