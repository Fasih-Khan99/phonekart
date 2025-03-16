import '../styles/phones.css'   // Use two dots (..) if file is in another folder
import Header from '../components/Header.jsx'    //importing Header component
import Navbar from '../components/Navbar.jsx'    //importing Navbar component
import Footer from '../components/Footer.jsx'    //importing Footer component
import reno13 from '../assets/oppo/reno13.png'
import reno12 from '../assets/oppo/reno12.png'
import reno11 from '../assets/oppo/reno11.png'
import f21 from '../assets/oppo/f21.png'
import reno5 from '../assets/oppo/reno5.png'
import a96 from '../assets/oppo/a96.png'
import {useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { db, auth } from "../firebase";  // Import Firebase
import { collection, addDoc } from "firebase/firestore";

function Oppo() {
   const navigate = useNavigate();
   const [user, setUser] = useState(null);

   useEffect(() => {
    // Check if user is logged in
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
  }, []);
  
    const oppoProducts = [
      {
        id: 1,
        name: "Oppo Reno 13 Pro (512GB/12GB)",
        price: 219999,
        image: reno13, 
        color: "Black Titanium"
      },
      {
        id: 2,
        name: "Oppo Reno 12 (512GB/12GB)",
        price: 159999,
        image: reno12, 
        color: "Astro Silver"
      },
      {
        id: 3,
        name: "Oppo Reno 11 (256GB/12GB)",
        price: 129999,
        image: reno11, 
        color: "Rock blue"
        
      },
      {
        id: 4,
        name: "Oppo F21 Pro (128GB/8GB)",
        price: 89999,
        image: f21, 
        color: "Rainbow Spectrum"
      },
      {
        id: 5,
        name: "Oppo Reno 5 Pro (256GB/12GB)",
        price: 84999,
        image: reno5, 
        color: "Black Titanium"
      },
      {
        id: 6,
        name: " Oppo A96 (128GB/8GB)",
        price: 77999,
        image: a96, 
        color: "Sea Blue"
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
    const [sortedProducts, setSortedProducts] = useState([...oppoProducts]); // Maintain sorted products
  
    const handleSortChange = (e) => {
      const selectedSort = e.target.value;
      setSortOption(selectedSort);
  
      let sortedArray = [...oppoProducts]; // Make a fresh copy before sorting
  
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
        <h1 style={{fontSize:20, color:" #333", textAlign: "center"}}>All Oppo phones are PTA approved with official brand warranty</h1>
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

export default Oppo
