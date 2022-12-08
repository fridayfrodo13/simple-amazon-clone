import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'
import Inventory from './components/Inventory/Inventory'
import Home from './components/Home/Home'
import Product from './components/Products/Product'
import React from 'react'
// import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from 'react-router-dom'
import Error from './components/Error/Error'
import Review from './components/Review/Review'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/review" element={<Review />} />
          <Route path="/product/:productkey" element={<Product />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
