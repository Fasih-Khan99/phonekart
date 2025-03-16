import { useState, useEffect } from "react";
import '../styles/Navbar.css'   // Use two dots (..) to go up one level
import searchicon from '../assets/search.png'
import loginicon from '../assets/loginuser.png'
import carticon from '../assets/cart.png'
import {Link, useNavigate} from "react-router-dom";
import phonekart from '../assets/pk.png'
import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import iphone from '../assets/iphone.png'
import samsung from '../assets/samsung.png'
import oppo from '../assets/oppo.png'
import xiaomi from '../assets/xiaomi.png'
import tecno from '../assets/tecno.png'
import realme from '../assets/realme.png'

function Navbar(){
    const [showSearch, setShowSearch] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [smartphoneDropdown, setSmartphoneDropdown] = useState(false);
    const [user, setUser] = useState(null); // Track logged-in user
    const navigate = useNavigate();


    // Listen for authentication state changes
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update state with current user
    });

    return () => unsubscribe(); // Cleanup on unmount
    }, []);


    const handleSignOut = async () => {
        try {
          await signOut(auth);
          setUser(null); // Clear user state
          navigate("/login"); // Redirect to login after sign out
        } catch (error) {
          console.error("Sign out failed:", error.message);
        }
      };
  
    return(
        <div className="Center">
            <div className="LeftN">
            <img src={phonekart} style={{ width: "150px", height: "40px", marginLeft:"30px", marginTop:"10px", filter: "drop-shadow(2px 2px 2px black)"}} alt="PK Icon"></img>
            <Link to="/" style={{color:'white', fontSize:15, marginLeft:50}}>Home</Link>
            <Link to="/sale" style={{color:'white', fontSize:15, marginLeft:50}}>SALE</Link>

           
            <Link style={{color:'white', fontSize:15, marginLeft:50}}
             onClick={() => {setSmartphoneDropdown(!smartphoneDropdown);}}>Smart Phones</Link>
            
            {smartphoneDropdown && (
              <div className="dropdown-menu">
              <Link to="/iphone" className="dropdown-item">
                <img src={iphone} alt="iPhone" />
                <span>iPhone</span>
              </Link>
              <Link to="/samsung" className="dropdown-item">
                <img src={samsung} alt="Samsung" />
                <span>Samsung</span>
              </Link>
              <Link to="/xiaomi" className="dropdown-item">
                <img src={xiaomi} alt="Xiaomi" />
                <span>Xiaomi</span>
              </Link>
              <Link to="/tecno" className="dropdown-item">
                <img src={tecno} alt="Tecno" />
                <span>Tecno</span>
              </Link>
              <Link to="/realme" className="dropdown-item">
                <img src={realme} alt="RealMe" />
                <span>RealMe</span>
              </Link>
              <Link to="/oppo" className="dropdown-item">
                <img src={oppo} alt="Oppo" />
                <span>Oppo</span>
              </Link>
            </div>
            )}
       

            <Link to="/smartTV" style={{color:'white', fontSize:15, marginLeft:50}}>Smart TV</Link>
            </div>
            
            <div className="RightN">
                <Link onClick={() => setShowSearch(!showSearch)}>
                <img src={searchicon} className="Navimage" style={{width:"25px", height:"25px", margin:"10px"}} alt="Search Icon"></img></Link>
                 {/* Search Box (Only Visible When showSearch is true) */}
                {showSearch && (
                    <input
                        type="text"
                        placeholder="Search..."
                        style={{
                        padding: "5px",
                        border: "1px solid gray",
                        borderRadius: "5px",
                        width:'40%'
                      }}
                    />
                )}
                <img src={loginicon} style={{width:"25px", height:"25px", margin:"10px"}} alt="Login Icon" 
                onClick={() => {
                    if (!user) {
                        navigate("/login"); // Redirect if not logged in
                    } else {
                        setDropdownOpen(!dropdownOpen);
                    }
                }}>

                </img>
                {dropdownOpen && user && (
                    <div className="dropdown">
                        <p className="user-name">{user.username || user.email}</p>
                        <button onClick={handleSignOut} className="signout-btn">Sign Out</button>
                    </div>
                )}
                <Link to="/addToCart"><img src={carticon} style={{width:"25px", height:"25px", margin:"10px", marginRight:"30px"}} alt="Cart Icon"></img></Link>
            </div>
        </div>
        
    );
}
export default Navbar