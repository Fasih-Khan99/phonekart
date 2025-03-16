import '../styles/phones.css'   // Use two dots (..) if file is in another folder
import Header from '../components/Header.jsx'    //importing Header component
import Navbar from '../components/Navbar.jsx'    //importing Navbar component
import Footer from '../components/Footer.jsx'    //importing Footer component
import phV from '../assets/tecno/phantomfold2.png'
import c30 from '../assets/tecno/camon30p.png'
import c20 from '../assets/tecno/camon20p.png'
import c18 from '../assets/tecno/camon18p.png'
import sp20 from '../assets/tecno/spark20p.png'
import spg from '../assets/tecno/sparkgo.png'
import {useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { db, auth } from "../firebase";  // Import Firebase
import { collection, addDoc } from "firebase/firestore";

function Tecno() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
  }, []);
      
        const tecnoProducts = [
          {
            id: 1,
            name: "Tecno Phantom V Fold 2 (512GB/12GB)",
            price: 369999,
            image: phV, 
            color: "Black Titanium"
          },
          {
            id: 2,
            name: "Tecno Camon 30 Premier (512GB/12GB)",
            price:  158999,
            image: c30, 
            color: "Black"
          },
          {
            id: 3,
            name: "Tecno Camon 20 Premier (512GB/8GB)",
            price: 124999,
            image: c20, 
            color: "Crystal White"
            
          },
          {
            id: 4,
            name: "Tecno Camon 18 Premier (256GB/8GB)",
            price: 74999,
            image: c18, 
            color: "Midnight"
          },
          {
            id: 5,
            name: "Tecno Spark 20 Pro Plus (256GB/8GB)",
            price: 59999,
            image: sp20, 
            color: "Temporal Orbit"
          },
          {
            id: 6,
            name: "Tecno Spark Go 1 (128GB/4GB)",
            price: 26499,
            image: spg, 
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
        const [sortedProducts, setSortedProducts] = useState([...tecnoProducts]); // Maintain sorted products
      
        const handleSortChange = (e) => {
          const selectedSort = e.target.value;
          setSortOption(selectedSort);
      
          let sortedArray = [...tecnoProducts]; // Make a fresh copy before sorting
      
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
        <h1 style={{fontSize:20, color:" #333", textAlign: "center"}}>All Tecno phones are PTA approved with official brand warranty</h1>
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

export default Tecno
