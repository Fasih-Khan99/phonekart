import '../styles/phones.css'   // Use two dots (..) if file is in another folder
import Header from '../components/Header.jsx'    //importing Header component
import Navbar from '../components/Navbar.jsx'    //importing Navbar component
import Footer from '../components/Footer.jsx'    //importing Footer component
import promax15 from '../assets/iphones/15promax.png'
import i15 from '../assets/iphones/iphone15.png'
import promax14 from '../assets/iphones/14promax.png'
import i14 from '../assets/iphones/iphone14.png'
import promax13 from '../assets/iphones/13promax.png'
import i13 from '../assets/iphones/iphone13.png'
import {useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { db, auth } from "../firebase";  // Import Firebase
import { collection, addDoc } from "firebase/firestore";

function Iphone() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    // Check if user is logged in
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const iphoneProducts = [
    {
      id: 1,
      name: "Apple iPhone 15 Pro Max (256GB/8GB)",
      price: 474999,
      image: promax15, 
      color: "Black Titanium"
    },
    {
      id: 2,
      name: "Apple iPhone 15 (128GB/6GB)",
      price: 344999,
      image: i15, 
      color: "Gold"
    },
    {
      id: 3,
      name: "Apple iPhone 14 Pro Max (256GB/8GB)",
      price: 397999,
      image: promax14, 
      color: "Deep Purple"
      
    },
    {
      id: 4,
      name: "Apple iPhone 14 (256GB/8GB)",
      price: 384999,
      image: i14, 
      color: "Midnight"
    },
    {
      id: 5,
      name: "Apple iPhone 13 Pro Max (256GB/8GB)",
      price: 373999,
      image: promax13, 
      color: "Gold"
    },
    {
      id: 6,
      name: "Apple iPhone 13 (256GB/8GB)",
      price: 273899,
      image: i13, 
      color: "White"
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
  const [sortedProducts, setSortedProducts] = useState([...iphoneProducts]); // Maintain sorted products

  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    setSortOption(selectedSort);

    let sortedArray = [...iphoneProducts]; // Make a fresh copy before sorting

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
        <h1 style={{fontSize:20, color:" #333", textAlign: "center"}}>All iphones are PTA approved with official brand warranty</h1>
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

export default Iphone
