import '../styles/Home.css'   // Use two dots (..) if file is in another folder
import Header from '../components/Header.jsx'    //importing Header component
import Navbar from '../components/Navbar.jsx'    //importing Navbar component
import Footer from '../components/Footer.jsx'    //importing Footer component
import tcl65 from '../assets/smarttv/tcl65.png'
import tcl652 from '../assets/smarttv/tcl652.png'
import samsung50 from '../assets/smarttv/samsung50.png'
import haier55 from '../assets/smarttv/haier55.png'
import eco40 from '../assets/smarttv/eco40.png'
import orient55 from '../assets/smarttv/orient55.png'
import {useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { db, auth } from "../firebase";  // Import Firebase
import { collection, addDoc } from "firebase/firestore";


function SmartTV() {
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
            name: "TCL 65V6B 65 Inch Smart & 4K UHD Google TV",
            price: 175999,
            image: tcl65, 
            color: "Black"
          },
          {
            id: 2,
            name: "TCL 65C655 65 Inch Smart & 4K QLED TV",
            price: 249999,
            image: tcl652,
            color: "Black" 
          },
          {
            id: 3,
            name: "Samsung 50DU7000 50 Inch Smart & Crystal UHD 4k TV",
            price: 146999,
            image: samsung50, 
            color: "Black"
          },
          {
            id: 4,
            name: "Haier 55S80EUX 55 inch smart & 4K QLED TV",
            price: 126999,
            image: haier55, 
            color: "Black"
          },
          {
            id: 5,
            name: "EcoStar LED 40 U871 Android Smart",
            price: 59900,
            image: eco40, 
            color: "Black"
          },
          {
            id: 6,
            name: "Orient Titantium 55 inch QLED Google TV",
            price: 164900,
            image: orient55, 
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
       <div className='smart1'> 
              <h1 style={{fontSize:20, color:" #333", textAlign: "center"}}>All Smart Tvs are with official brand warranty</h1>
              <div className="sort-container">
                  <select id="sort" value={sortOption} onChange={handleSortChange}>
                  <option value="">Sort by</option>
                  <option value="lowToHigh">Price, low to high</option>
                  <option value="highToLow">Price, high to low</option>
                </select>
              </div>
            </div>
           
           
            {/* Sort Dropdown */}
            <div className='smart2'>
            {sortedProducts.map((product) => (
              <div key={product.id} className="sale-card">
                <img src={product.image} alt={product.name} className="sale-image" />
                <p className="phone-name">{product.name}</p>
                <p className="phone-name">{product.color}</p>
                <p className="sale-price"><strong>Rs: {product.price.toLocaleString()}</strong></p>
                <button className="Addbutton" onClick={() => handleAddToCart(product)}>ADD TO CART</button>
              </div>
            ))}
      
            </div>
      <Footer/>
     
      
    </div>
  )
}

export default SmartTV
