import '../styles/Policies.css'   // Use two dots (..) if file is in another folder
import Header from '../components/Header.jsx'    //importing Header component
import Navbar from '../components/Navbar.jsx'    //importing Navbar component
import Footer from '../components/Footer.jsx'    //importing Footer component
import {ToastContainer, toast} from "react-toastify";   //temporary notification message
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

function ContactUs() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");     
  const [phone, setPhone] = useState("");  
  const [email, setEmail] = useState("");     
  const [comment, setComment] = useState("");

  useEffect(() => {
    // Check if user is logged in
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const handleContact = async (e) => {
    e.preventDefault(); // Prevent page refresh
      
    if (!user) {
      navigate("/login");
    }
    try {
      const serviceID = "Your service ID";        // Replace with your EmailJS Service ID
      const templateID = "Your template ID";      // Replace with your EmailJS Template ID
      const userID = "Your Public Key";           // Replace with your EmailJS Public Key

      const templateParams = {
        from_name: name,
        from_email: email,
        phone: phone,
        message: comment,
        to_email: "support@phonekart.com", // Your email
      };

      await emailjs.send(serviceID, templateID, templateParams, userID);

      toast.success("Your response is saved and emailed. Thanks for contacting us!");
      setName("");
      setPhone("");
      setEmail("");
      setComment("");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error: Unable to send your message.");
    }
  };
  


  return (
    <div className='Full'>
       <ToastContainer 
            position="top-center"
            autoClose={1500} // Faster auto-close (1.5s)
            hideProgressBar={true} // Removes progress bar for instant display
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}

          />
      <Header/>
      <Navbar/>  
      <div className='contact'>
          <h1 style={{fontSize:25, color: "black", marginLeft:50, marginBottom:20}}>CONTACT US</h1><hr/>
         <div className='LeftC'>
         <h1 style={{fontSize:15, color: "rgb(113, 121, 126)" , marginRight:150, marginTop:50}}> 
            Have a question or comment? Use the form below to send us a message
          </h1>
          
          <form className='ContactForm' onSubmit={handleContact}>
          <br/>
            <label style={{fontSize:15, color: "black", marginLeft:50, marginBottom:20}}><b>Your Name</b></label><br/>
            <input 
              type="text" 
              placeholder="Enter your name"  
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
            />
            <br/><br/>
            <label style={{fontSize:15, color: "black", marginLeft:50, marginBottom:20}}><b>Your Phone</b></label><br/>
            <input 
              type="number" 
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              required 
            />
            <br/><br/>
            <label style={{fontSize:15, color: "black", marginLeft:50, marginBottom:20}}><b>Your Email</b> <span className="required">*</span></label><br/>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required 
            />
            <br/><br/>
            <label style={{fontSize:15, color: "black", marginLeft:50, marginBottom:20}}><b>Your Comment </b><span className="required">*</span></label><br/>
            <textarea 
              placeholder="Please leave your comment here" 
              rows="5"
              value={comment}
              onChange={(e)=>setComment(e.target.value)}
              required 
            > 
            </textarea>

            <br/><br/><button type="submit" className="submit-btn">SUBMIT CONTACT</button><br/>
          </form>
        

         </div>
         <div className='RightC'>
          <h1 style={{fontSize:20, color: "black", marginTop:50}}>STORE INFORMATION</h1>
          <p style={{fontSize:15, color: "rgb(113, 121, 126)", textAlign:"justify", marginLeft:10, marginTop:0}}>
          We love hearing from our customers. 
          <br/>You can email us with any questions at info@airkart.com. 
          <br/>We will respond back to you email as quickly as possible
          <br/> within a span of 24 - 48 Working Hours.

          <br/><br/><b>Email us :</b>
          <br/>Support : support@phonekart.com
          <br/>Sales Inquiry/Information : info@phonekart.com
          <br/>UAN :
          <br/> +92 3 111 555 142
          <br/><br/><hr/>

          <br/><b>Opening Hours:</b>
          <br/>Monday to Saturday: 9:00 am - 07:00 pm
          </p>

         </div>
        </div>
        
      <Footer/>
     
      
    </div>
  )
}

export default ContactUs
