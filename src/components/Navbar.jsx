import { useState, useEffect, useRef } from "react";
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
    const searchRef = useRef(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [showPhonesMenu, setShowPhonesMenu] = useState(false);





    // Listen for authentication state changes
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update state with current user
    });

    return () => unsubscribe(); // Cleanup on unmount
    
    }, []);

    useEffect(() => {
      function handleClickOutside(event) {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
          setShowSearch(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
      const handleResize = () => {
        const mobile = window.innerWidth <= 768;
        setIsMobile(mobile);

        if (!mobile) {
          setMobileMenuOpen(false);
        }
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
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
          <div
            className="hamburger"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="LeftN">
            <div className="logo-container">
              <img src={phonekart} className="logo" alt="PK Icon"></img>
            </div>
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="/sale" className="nav-link">SALE</Link>

           
            <Link className="nav-link"
             onClick={() => {setSmartphoneDropdown(!smartphoneDropdown);}}>SMART PHONES</Link>
            
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
       

            <Link to="/smartTV" className="nav-link">SMART TV</Link>
            </div>
            
            <div className="RightN" ref={searchRef}>
                <Link onClick={() => setShowSearch(!showSearch)}>
                <img src={searchicon} className="Navimage" style={{width:"25px", height:"25px", margin:"10px"}} alt="Search Icon"></img></Link>
                 {/* Search Box (Only Visible When showSearch is true) */}
                {showSearch && (
                    <input className="search-input"
                        type="text"
                        placeholder="Search..."
                        autoFocus
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

            {isMobile && (
              <div className={`mobile-sidebar ${mobileMenuOpen ? "open" : ""}`}>
                <span className="close-btn" onClick={() => {
                    setMobileMenuOpen(false);
                    setShowPhonesMenu(false);
                }}>
                  ✕
                </span>

                <Link to="/" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
                <Link to="/sale" onClick={() => setMobileMenuOpen(false)}>SALE</Link>

                 {/* SMART PHONES TOGGLE */}
                <div
                  className="mobile-menu-item"
                  onClick={() => setShowPhonesMenu(!showPhonesMenu)}
                >
                  SMART PHONES
                  <span className="arrow">{showPhonesMenu ? "▲" : "▼"}</span>
                </div>

                {/* PHONE LIST */}
                {showPhonesMenu && (
                  <div className="mobile-submenu">
                    <Link to="/iphone" onClick={() => setMobileMenuOpen(false)}>iPhone</Link>
                    <Link to="/samsung" onClick={() => setMobileMenuOpen(false)}>Samsung</Link>
                    <Link to="/xiaomi" onClick={() => setMobileMenuOpen(false)}>Xiaomi</Link>
                    <Link to="/oppo" onClick={() => setMobileMenuOpen(false)}>Oppo</Link>
                    <Link to="/tecno" onClick={() => setMobileMenuOpen(false)}>Tecno</Link>
                    <Link to="/realme" onClick={() => setMobileMenuOpen(false)}>RealMe</Link>
                  </div>
                )}
                {/* <Link to="/iphone" onClick={() => setMobileMenuOpen(false)}>SMART PHONES</Link> */}
                <Link to="/smartTV" onClick={() => setMobileMenuOpen(false)}>SMART TV</Link>
              </div>
            )}

        </div>
        
    );
}
export default Navbar