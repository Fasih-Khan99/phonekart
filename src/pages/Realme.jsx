import '../styles/phones.css'   // Use two dots (..) if file is in another folder
import Header from '../components/Header.jsx'    //importing Header component
import Navbar from '../components/Navbar.jsx'    //importing Navbar component
import Footer from '../components/Footer.jsx'    //importing Footer component
import gt6 from '../assets/realme/gt6.png'
import p13 from '../assets/realme/13p.png'
import i9 from '../assets/realme/9i.png'
import gtm from '../assets/realme/gtm.png'
import p12 from '../assets/realme/12p.png'
import c33 from '../assets/realme/c33.png'
import {useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { db, auth } from "../firebase";  // Import Firebase
import { collection, addDoc } from "firebase/firestore";


function Realme() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
  }, []);
    
      const realmeProducts = [
        {
          id: 1,
          name: "Realme GT 6 (512GB/12GB)",
          price: 149999,
          image: gt6, 
          color: "Fluid Sliver"
        },
        {
          id: 2,
          name: "Realme 13 Plus (256GB/12GB)",
          price: 89999,
          image: p13, 
          color: "Dark Purple"
        },
        {
          id: 3,
          name: "Realme 9i (128GB/6GB)",
          price: 77500,
          image: i9, 
          color: "Prism Black"
          
        },
        {
          id: 4,
          name: "Realme GT Master Edition (128GB/8GB)",
          price: 76999,
          image: gtm, 
          color: "Luna White"
        },
        {
          id: 5,
          name: "Realme 12 Plus (128GB/8GB)",
          price: 74999,
          image: p12, 
          color: "Gold"
        },
        {
          id: 6,
          name: "Realme C33 (128GB/4GB)",
          price: 54999,
          image: c33, 
          color: "Gold"
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
      const [sortedProducts, setSortedProducts] = useState([...realmeProducts]); // Maintain sorted products
    
      const handleSortChange = (e) => {
        const selectedSort = e.target.value;
        setSortOption(selectedSort);
    
        let sortedArray = [...realmeProducts]; // Make a fresh copy before sorting
    
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
        <h1 style={{fontSize:20, color:" #333", textAlign: "center"}}>All Realme phones are PTA approved with official brand warranty</h1>
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

export default Realme
