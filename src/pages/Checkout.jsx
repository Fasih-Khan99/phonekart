import '../styles/Checkout.css'; // Use two dots (..) if file is in another folder
import Header from '../components/Header.jsx'    //importing Header component
import Navbar from '../components/Navbar.jsx'    //importing Navbar component
import Footer from '../components/Footer.jsx'    //importing Footer component
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../firebase";
import { collection, deleteDoc, addDoc, getDocs } from "firebase/firestore";
import {ToastContainer, toast} from "react-toastify";   //temporary notification message 

function Checkout(){
    const navigate = useNavigate();
    const [cardNumber, setCardNumber] = useState("");
    const [year, setyear] = useState("");
    const [month, setmonth] = useState("");
    const [cvv, setCvv] = useState("");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [selectedCity, setSelectedCity] = useState("");

    const cities = ["Karachi", "Lahore", "Islamabad", "Faisalabad", "Balochistan", "Rawalpindi", "Hyderabad", "Peshawar", "Quetta",];
  
    const validateInputs = () => {
      if (!name || !email || !phone || !selectedCity || !address || !cardNumber || !month || !year || !cvv) {
          toast.error("Please fill in all required fields before proceeding.", { position: "top-center" });
          return false;
      }
      return true;
    };



    const handleCheckout = async (e) => {
      e.preventDefault(); // Prevents page reload
      if (!validateInputs()) return;

      const user = auth.currentUser;
      if (!user) {
          toast.error("You must be logged in to place an order.", { position: "top-center" });
          return;
      }

      try {
          // Get items from cart
          const cartRef = collection(db, "carts", user.uid, "items");
          const cartItems = await getDocs(cartRef);
          const items = cartItems.docs.map(doc => ({ id: doc.id, ...doc.data() }));

          if (items.length === 0) {
              toast.error("Your cart is empty!", { position: "top-center" });
              return;
          }


      const totalAmount = items.reduce((sum, item) => {
        const price = parseFloat(item.price) || 0; // Ensure price is valid
        const quantity = parseInt(item.quantity, 10) || 0; // Ensure quantity is valid
        return sum + price * quantity;
      }, 0);

          // Save order in Firestore under 'orders' collection
          await addDoc(collection(db, "orders", user.uid, "items"), {
              userId: user.uid,
              name,
              email,
              phone,
              address,
              city: selectedCity,
              items,
              totalAmount,
              // totalAmount: items.reduce((sum, item) => sum + (Number(item.price) * item.quantity), 0),
              paymentMethod: "Credit Card",
              timestamp: new Date()
          });

          // Clear cart after order placement
          cartItems.forEach(async (item) => {
              await deleteDoc(item.ref);
          });

          toast.success("Order placed successfully!", { position: "top-center", autoClose: 1500 });
          setTimeout(() => navigate("/"), 3000); // Redirect after 3s

      } catch (error) {
          console.error("Error placing order:", error);
          toast.error("Failed to place order. Please try again later.");
      }
  };

    return(
        <div className='Full'>
          <ToastContainer 
            position="top-center"
            autoClose={1500} // Faster auto-close (1.5s)
            hideProgressBar={true} // Removes progress bar for instant display
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}

          />
        <Header/>
        <Navbar/>
     
       <div className="checkout-container">
        <form className='CCard'> 
          <h2>Checkout</h2>
          <br/>
          <h1>Contact Information</h1>
        
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
         
         
         <input
            type="number"
            placeholder="Phone Number"
            value={phone} 
            onChange={(e) => setPhone(e.target.value)}
            required
            maxLength="15"
            onInput={(e) => {
              if (e.target.value.length > 15) {
                e.target.value = e.target.value.slice(0, 15);
              }
            }}
          />

          <br/> 
          <h1>Shipping Information</h1>
          <div className="dropdowncontainer">
           <select
              id="city"
              className="dropdown2"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
            <option value="" disabled>
              Choose a city
            </option>
              {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
            </select>
         </div>

         <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          <br/> 
          <h1>Payment Details</h1>
          <input
            type="text"
            placeholder="Card Holder Name"
            required
          />

            <input
            type="number"
            placeholder="XXXX XXXX XXXX XXXX"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, "").slice(0, 16))} 
            maxLength={19}
            required
          />
          <br/>

            <input
            style={{width:70, fontSize:15, float:"left"}}
              type="number"
              placeholder="MM"
              value={month}
              onChange={(e) => {
                let value = e.target.value;
                if (value > 12) {
                  value = 12; // Restrict to 12 if user enters more
                }
                setmonth(value);
              }}
              maxLength="2"
              onInput={(e) => {
                if (e.target.value.length > 2) {
                  e.target.value = e.target.value.slice(0, 2);
                }
              }}
              min="01"
              max="12" 
              required
            />
            <input
            style={{width:70, fontSize:15, float:"left", marginLeft:70}}
              type="number"
              placeholder="YY"
              value={year}
              onChange={(e) => setyear(e.target.value)}
              maxLength="2"   
              onInput={(e) => {
                if (e.target.value.length > 2) {
                  e.target.value = e.target.value.slice(0, 2);
                }
              }}
              required
            />
        
            <input
             style={{width:70, fontSize:15, float:"left", marginLeft:70}}
              type="password"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              maxLength={3}
              required
            />
            <br/>
 
          <button className="payButton" onClick={handleCheckout}>
            Pay
          </button>

          <p className="secureText">🔒 Your payment information is secure and encrypted</p>
        </form>
      </div>
        <Footer/>
     
      
     </div>

    )
}

export default Checkout



