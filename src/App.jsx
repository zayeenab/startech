import Head from "./components/Head"
import Featured from "./components/Featured"
import { EcomProvider } from "./context/EcomContext"
import TopSelling from "./components/TopSelling"
import Footer from "./components/Footer"
import Products from "./components/pages/Products"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Detail from "./components/pages/Detail"
import Alert from "./components/pages/Alert"
import Cart from "./components/pages/Cart"
import Checkout from "./components/pages/Checkout"
import Register from "./components/pages/Register"
import Login from "./components/pages/Login"
import ThankYou from "./components/pages/ThankYou"
import { AuthProvider } from "./context/AuthContext"
import useLocalStorage from "./hooks/useLocalStorage"

function App() {
const {getItem} = useLocalStorage("auth-token")
const token = getItem()
let authInitialState = {accessToken: token ?? null}

  return (
   <AuthProvider defaultState={authInitialState}>
     <EcomProvider>
      <Router>
      <Head/>
      <Alert/>
      <Routes>
        <Route 
        path="/" 
        element={
          <>
          <Featured/>
          <TopSelling/>
          </>
        }
        />
      <Route path="/products" element={<Products />}/>
      <Route path="/detail/:id" element={<Detail />}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/thankyou" element={<ThankYou/>}/>

      </Routes>
      <Footer />
      </Router>
    </EcomProvider>
   </AuthProvider>
  )
}

export default App
