import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Sale from "./pages/Sale.jsx";
import SmartTV from "./pages/SmartTV.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import AddToCart from "./pages/AddToCart.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import FAQs from "./pages/FAQs.jsx";
import ShippingPolicy from "./pages/ShippingPolicy.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import ReturnPolicy from "./pages/ReturnPolicy.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";
import ForgetPassword from "./pages/ForgetPassword.jsx";
import Iphone from "./pages/Iphone.jsx";
import Samsung from "./pages/Samsung.jsx";
import Oppo from "./pages/Oppo.jsx";
import Realme from "./pages/Realme.jsx";
import Xiaomi from "./pages/Xiaomi.jsx";
import Tecno from "./pages/Tecno.jsx";
import Checkout from "./pages/Checkout.jsx";
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/smartTV" element={<SmartTV />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addToCart" element={<AddToCart />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/shippingPolicy" element={<ShippingPolicy />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/returnPolicy" element={<ReturnPolicy />} />
          <Route path="/termsConditions" element={<TermsConditions />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/samsung" element={<Samsung />} />
          <Route path="/oppo" element={<Oppo />} />
          <Route path="/realme" element={<Realme />} />
          <Route path="/xiaomi" element={<Xiaomi />} />
          <Route path="/tecno" element={<Tecno />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
