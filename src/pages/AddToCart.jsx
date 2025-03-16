import '../styles/AddToCart.css'   // Use two dots (..) if file is in another folder
import Header from '../components/Header.jsx'    //importing Header component
import Navbar from '../components/Navbar.jsx'    //importing Navbar component
import Footer from '../components/Footer.jsx'    //importing Footer component
import { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, getDocs, deleteDoc, doc  } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";   //temporary notification message

function AddToCart() {

  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchCartItems(currentUser.uid);
      }
    });

    return () => unsubscribe();
  }, []);

   // Function to fetch cart items
   const fetchCartItems = async (userId) => {
    const querySnapshot = await getDocs(collection(db, "carts", userId, "items"));
    
    const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
    // Debugging: Check for duplicate IDs
    const itemIds = items.map(item => item.id);
    console.log("Fetched item IDs:", itemIds);
  
    setCartItems(items);
  };
  
  
   const handleRemoveItem = async (itemId) => {
    if (!user) return; // Ensure user is logged in
  
    console.log("Removing item from cart:"); // Debugging
    toast.success("Removing item from cart:"); 
  
    try {
      await deleteDoc(doc(db, "carts", user.uid, "items", String(itemId))); // Ensure ID is a string
      setCartItems(cartItems.filter(item => item.id !== itemId)); // Update UI
    } catch (error) {
      console.error("Error removing item:", error);
      toast.error("Error removing item:", error);
    }
  };

  return (
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
      <h1>Your Cart</h1>
      <div className="cart-container">
        {cartItems.map((item, index) => (
          <div key={`${item.id}-${index}`} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-image" />
            <div>
              <p>{item.name}</p>
              <p>{item.color}</p>
              <p><strong>Rs: {item.price.toLocaleString()}</strong></p>
              <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>Remove</button> {/* Updated Remove Button */}
            </div>
          </div>
        ))}
      </div>
      <button className="checkout-btn" onClick={() => navigate("/checkout")}>Checkout</button>
      <Footer/>
     
      
    </div>
  )
}

export default AddToCart
