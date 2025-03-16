import { Link, useNavigate } from 'react-router-dom'; // Import Link for internal navigation
import '../styles/Footer.css';  // Use two dots (..) to go up one level
import {ToastContainer, toast} from "react-toastify";   //temporary notification message
import { useEffect, useState } from "react";
import { auth } from "../firebase";


function Footer() {
    const customers = [
        { name: 'My Account', link: '/login' },
        { name: 'About Us', link: '/aboutUs' },
        { name: 'Contact Us', link: '/contactUs' },
        { name: 'FAQs', link: '/faqs' }
    ];

    const policies = [
        { name: 'Shipping & Cancellation Policy', link: '/shippingPolicy' },
        { name: 'Return Policy', link: '/returnPolicy' },
        { name: 'Privacy Policy', link: '/privacyPolicy' },
        { name: 'Terms & Conditions', link: '/termsConditions' }
    ];

    const follows = [
        { name: 'Facebook', link: 'https://www.facebook.com' },
        { name: 'Instagram', link: 'https://www.instagram.com' },
        { name: 'YouTube', link: 'https://www.youtube.com' }
    ];


    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");    

    useEffect(() => {
     // Check if user is logged in
     auth.onAuthStateChanged((currentUser) => {
       setUser(currentUser);
     });
   }, []);

    const handleMail = async () => {
      
         if (!user) {
           navigate("/login");
         } else {
           try {
            console.log("Your email saved, thanks for registering"); // Debugging
            toast.success("Your email saved, thanks for registering"); 
           
            
           } catch (error) {
             console.error("Error: Not able to register:", error);
             toast.error("Error: Not able to register:"); 
           }
         }
       };


    return (
        
        <>
         <ToastContainer 
            position="top-center"
            autoClose={3500} // Faster auto-close (1.5s)
            hideProgressBar={true} // Removes progress bar for instant display
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}

          />
            <div className="TopFoot">
                <h1 style={{fontSize:20, color:"white", textAlign:"center", margin:0, paddingTop:20}}>SIGN UP FOR OUR NEWSLETTER</h1>
                <form className="newsletter-form" onSubmit={handleMail}>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="newsletter-input"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                    />
                     <button type="submit" className="newsletter-button" >SUBMIT</button>
                </form>
            </div>
            <div className="Foot">
                <div className="LeftF">
                    <h1 style={{ fontSize: 20, color: 'white', textAlign:"left"}}>CUSTOMER CARE</h1>
                    <ul>
                        {customers.map((item, index) => (
                            <li key={index}>
                                <Link to={item.link} style={{ color: 'white', textDecoration: 'none' }}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="MiddleF">
                    <h1 style={{ fontSize: 20, color: 'white', textAlign:"left" }}>POLICIES</h1>
                    <ul>
                        {policies.map((item, index) => (
                            <li key={index}>
                                <Link to={item.link} style={{ color: 'white', textDecoration: 'none' }}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="RightF">
                    <h1 style={{ fontSize: 20, color: 'white', textAlign:"left" }}>FOLLOW US ON</h1>
                    <ul>
                        {follows.map((item, index) => (
                            <li key={index}>
                                <a href={item.link} style={{ color: 'white', textDecoration: 'none' }}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        <div className="LastF">
           <text style={{fontSize:18, color:'white', marginLeft:"35%"}}>&copy; {new Date().getFullYear()} PHONEKART, All Rights Reserved</text>
        </div>

            
        </>
    );
}

export default Footer;
