import {Route, Routes, useLocation } from 'react-router-dom'

import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'

import { useAppContext } from './context/AppContext'

import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import AllProduct from './pages/AllProduct'
import Footer from './components/Footer'

const App = () => {
  const $isSellerPath=useLocation().pathname.includes("seller")
  const {showUserLogin}=useAppContext()
  return (
    <div>

  {$isSellerPath?null:<Navbar/>}
  {showUserLogin?<LoginForm/>:null}
  <Toaster/>
  <div className={`${$isSellerPath ? " " : 'px-6 md:px-16 lg:px-24 xl:px-32'}`}>

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/products" element={<AllProduct/>}/>
    {/* <Route path="/products/:category" element={<ProductCategory/>}/>
    <Route path="/products/:category/:id" element={<ProductDetails/>}/> */}
  </Routes>
  </div>
{!$isSellerPath&&<Footer/>}
      
    </div>
  )
}

export default App