import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import('preline')

function App() {


  return (
    <section>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    
    </section>
  )
}

export default App
