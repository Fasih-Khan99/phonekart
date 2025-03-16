import '../styles/phones.css'   // Use two dots (..) if file is in another folder
import Header from '../components/Header.jsx'    //importing Header component
import Navbar from '../components/Navbar.jsx'    //importing Navbar component
import Footer from '../components/Footer.jsx'    //importing Footer component
import m15ultra from '../assets/xiaomi/15ultra.png'
import m15 from '../assets/xiaomi/15.png'
import t14 from '../assets/xiaomi/14T.png'
import poco from '../assets/xiaomi/pocox7pro.png'
import n14 from '../assets/xiaomi/note14pro.png'
import n13 from '../assets/xiaomi/note13pro.png'
import {useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { db, auth } from "../firebase";  // Import Firebase
import { collection, addDoc } from "firebase/firestore";


function Xiaomi() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
  }, []);
      
  const xiaomiProducts = [
    {
      id: 1,
      name: "Xiaomi 15 Ultra (512GB/16GB)",
      price: 399999,
      image: m15ultra, 
      color: "Black"
    },
    {
      id: 2,
      name: "Xiaomi 15 (512GB/12GB)",
      price: 269999,
      image: m15, 
      color: "White"
    },
    {
      id: 3,
      name: "Xiaomi 14T (512GB/12GB)",
      price: 175999,
      image: t14, 
      color: "Titan Blue"
      
    },
    {
      id: 4,
      name: "Poco X7 Pro (512GB/12GB)",
      price: 139999,
      image: poco, 
      color: "Black"
    },
    {
      id: 5,
      name: "Redmi Note 14 Pro (512GB/12GB)",
      price: 90999,
      image: n14, 
      color: "Aurora Purple"
    },
    {
      id: 6,
      name: "Redmi Note 13 Pro (512GB/12GB)",
      price: 72999,
      image: n13, 
      color: "Lavender Purple"
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
  const [sortedProducts, setSortedProducts] = useState([...xiaomiProducts]); // Maintain sorted products

  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    setSortOption(selectedSort);

    let sortedArray = [...xiaomiProducts]; // Make a fresh copy before sorting

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
        <h1 style={{fontSize:20, color:" #333", textAlign: "center"}}>All Xiaomi phones are PTA approved with official brand warranty</h1>
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

export default Xiaomi
