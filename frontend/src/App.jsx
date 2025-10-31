import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Shop from "./pages/Shop.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Checkout from "./pages/Checkout.jsx"
import MyAccount from "./pages/MyAccount.jsx"
import Blog from "./pages/Blog.jsx"
import Product from "./pages/Product.jsx"
import Login from "./pages/Login.jsx"
import Navbar from "./components/Navbar.jsx"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/myAccount" element={<MyAccount />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />

      </Routes>

    </div>
  )
}
export default App