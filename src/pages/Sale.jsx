import '../styles/phones.css'   // Use two dots (..) if file is in another folder
import Header from '../components/Header.jsx'    //importing Header component
import Navbar from '../components/Navbar.jsx'    //importing Navbar component
import Footer from '../components/Footer.jsx'    //importing Footer component
import tcl from '../assets/sale/tclP635.png'
import sams from '../assets/sale/samsung5.png'
import sony from '../assets/sale/sonyKD.png'
import eco from '../assets/sale/ecostarCX.png'
import haier from '../assets/sale/haier.png'
import hisense from '../assets/sale/hisense.png'
import salepic from '../assets/sale.jpg'
import {useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { db, auth } from "../firebase";  // Import Firebase
import { collection, addDoc } from "firebase/firestore";

function Sale() {
   const navigate = useNavigate();
     const [user, setUser] = useState(null);
  
     useEffect(() => {
      // Check if user is logged in
      auth.onAuthStateChanged((currentUser) => {
        setUser(currentUser);
      });
    }, []);
    
      const saleProducts = [
        {
          id: 1,
          name: "TCL 43 Inch 43P635 4K Google TV",
          ogprice: 86500,
          price:60500,
          image: tcl, 
          color: "Black"
        },
        {
          id: 2,
          name: "Samsung 49 Inch Series 5 HD Smart LED TV (49N5300)",
          ogprice: 75800,
          price: 45500,
          image: sams,
          color: "Black" 
        },
        {
          id: 3,
          name: "Sony 49 Inch 4K Smart LED TV (KD49X7000F)",
          ogprice: 92999,
          price: 64999,
          image: sony, 
          color: "Black"
        },
        {
          id: 4,
          name: "EcoStar 65 Inch 4K Smart LED TV (CX65UD921P)",
          ogprice: 99900,
          price: 49999,
          image: eco, 
          color: "Black"
        },
        {
          id: 5,
          name: "Haier 65 Inch 4K LED TV (LE65U6900UG)",
          ogprice: 149999,
          price: 114999,
          image: haier, 
          color: "Black"
        },
        {
          id: 6,
          name: "Hisense 49 Inch HD LED TV (49M2160)",
          ogprice: 53340,
          price: 27999,
          image: hisense, 
          color: "Black"
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
      const [sortedProducts, setSortedProducts] = useState([...saleProducts]); // Maintain sorted products
    
      const handleSortChange = (e) => {
        const selectedSort = e.target.value;
        setSortOption(selectedSort);
    
        let sortedArray = [...saleProducts]; // Make a fresh copy before sorting
    
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
      <div className='sale1'> 
        <h1 style={{fontSize:20, color:" #333", textAlign: "center"}}>Sale available till 1st April 2025 on exclusive products only.</h1>
        <img src={salepic} alt="Sale Pic"></img>
        <br/>

        <div className="sort-container">
            <select id="sort" value={sortOption} onChange={handleSortChange}>
            <option value="">Sort by</option>
            <option value="lowToHigh">Price, low to high</option>
            <option value="highToLow">Price, high to low</option>
          </select>
        </div>
      </div>
      <br/>
     
      {/* Sort Dropdown */}
      <div className='sale2'>
      {sortedProducts.map((product) => (
        <div key={product.id} className="sale-card">
          <img src={product.image} alt={product.name} className="sale-image" />
          <p className="phone-name">{product.name}</p>
          <p className="phone-name">{product.color}</p>
          <p className="og-price"><strong>Rs: {product.ogprice.toLocaleString()}</strong></p>
          <p className="sale-price"><strong>Rs: {product.price.toLocaleString()}</strong></p>
          <button className="Addbutton" onClick={() => handleAddToCart(product)}>ADD TO CART</button>
        </div>
      ))}

      </div>
      <Footer/>
     
      
    </div>
  )
}

export default Sale
