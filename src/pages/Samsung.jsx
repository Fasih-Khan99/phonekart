import '../styles/phones.css'   // Use two dots (..) if file is in another folder
import Header from '../components/Header.jsx'    //importing Header component
import Navbar from '../components/Navbar.jsx'    //importing Navbar component
import Footer from '../components/Footer.jsx'    //importing Footer component
import s25 from '../assets/samsung/s25ultra.png'
import s24 from '../assets/samsung/s24ultra.png'
import s23 from '../assets/samsung/s23ultra.png'
import s22 from '../assets/samsung/s22ultra.png'
import s21 from '../assets/samsung/s21ultra.png'
import s20 from '../assets/samsung/s20.png'
import {useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { db, auth } from "../firebase";  // Import Firebase
import { collection, addDoc } from "firebase/firestore";

function Samsung() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
  }, []);
    
      const samsungProducts = [
        {
          id: 1,
          name: "Samsung Galaxy S25 Ultra (512GB/12GB)",
          price: 439999,
          image: s25, 
          color: "Titanium Black"
        },
        {
          id: 2,
          name: "Samsung Galaxy S24 Ultra (512GB/12GB)",
          price: 429999,
          image: s24, 
          color: "Titanium Gray"
        },
        {
          id: 3,
          name: "Samsung Galaxy S23 Ultra (512GB/12GB)",
          price: 389999,
          image: s23, 
          color: "Cream"
          
        },
        {
          id: 4,
          name: "Samsung Galaxy S22 Ultra (512GB/12GB)",
          price: 331999,
          image: s22, 
          color: "Burgundy"
        },
        {
          id: 5,
          name: "Samsung Galaxy S21 Ultra (512GB/12GB)",
          price: 242999,
          image: s21, 
          color: "Phantom Silver"
        },
        {
          id: 6,
          name: "Samsung Galaxy S20 (128GB/8GB)",
          price: 170999,
          image: s20, 
          color: "Cosmic Gray"
        },
      ];

      const handleAddToCart = async (product) => {
        if (!user) {
          navigate("/login");
        } else {
          try {
            await addDoc(collection(db, "carts", user.uid, "items"), product);
            navigate("/addToCart");
          } catch (error) {
            console.error("Error adding to cart:", error);
          }
        }
      };
    
      const [sortOption, setSortOption] = useState(""); // Stores sorting selection
      const [sortedProducts, setSortedProducts] = useState([...samsungProducts]); // Maintain sorted products
    
      const handleSortChange = (e) => {
        const selectedSort = e.target.value;
        setSortOption(selectedSort);
    
        let sortedArray = [...samsungProducts]; // Make a fresh copy before sorting
    
        if (selectedSort === "lowToHigh") {
          sortedArray.sort((a, b) => a.price - b.price);
        } else if (selectedSort === "highToLow") {
          sortedArray.sort((a, b) => b.price - a.price);
        }
    
        setSortedProducts(sortedArray); // Update the sorted list
      };
  return (
    <div className='Full'>
      <Header/>
      <Navbar/>  
      <div className='phone1'> 
        <h1 style={{fontSize:20, color:" #333", textAlign: "center"}}>All Samsung phones are PTA approved with official brand warranty</h1>
        <div className="sort-container">
            <select id="sort" value={sortOption} onChange={handleSortChange}>
            <option value="">Sort by</option>
            <option value="lowToHigh">Price, low to high</option>
            <option value="highToLow">Price, high to low</option>
          </select>
        </div>
      </div>
     
      {/* Sort Dropdown */}
      <div className='phones'>
      {sortedProducts.map((product) => (
        <div key={product.id} className="phone-card">
          <img src={product.image} alt={product.name} className="phone-image" />
          <p className="phone-name">{product.name}</p>
          <p className="phone-name">{product.color}</p>
          <p className="phone-price"><strong>Rs: {product.price.toLocaleString()}</strong></p>
          <button className="Addbutton" onClick={() => handleAddToCart(product)}>ADD TO CART</button>
        </div>
      ))}

      </div>
      <Footer/>
     
      
    </div>
  )
}

export default Samsung
