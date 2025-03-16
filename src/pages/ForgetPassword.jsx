import '../styles/ForgetPassword.css'   // Use two dots (..) if file is in another folder
import Header from '../components/Header.jsx'    //importing Header component
import Navbar from '../components/Navbar.jsx'    //importing Navbar component
import Footer from '../components/Footer.jsx'    //importing Footer component
import {useState} from "react"
import loginpic from '../assets/loginuser.png'
import { Link } from 'react-router-dom'; // Import Link for internal navigation

function ForgetPassword(){
    const [email, setEmail] = useState("");  
    return(
    <div className='Full'>
      <Header/>
      <Navbar/>  
      <div className='FPbox'>
        <br/><br/>
        <form className='FPform'>
        <br/>
        <h1 style={{fontSize:25, color: "white", textAlign:"center", marginTop:-80, marginBottom: 70}}>Forgot Password?</h1>
        <br/>
        <img  src={loginpic} style={{width:"100px", height:"100px", marginLeft:"120px", marginTop:"-100px"}} alt="Login Pic"></img>
        <br/><br/>
        
        <h1 style={{fontSize:20, color: "white", textAlign:"center", marginTop:-10, marginBottom: 70}}>We will send you an email to reset your password.</h1>
        <img  src={loginpic} style={{width:"40px", height:"40px", marginLeft:"20px", marginBottom:-13}} alt="Login Pic"></img>
        <input
            type='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Enter Your Email'
            required
        />
        <br/><br/>
        <button type="submit" className="FPbtn">SUBMIT</button><br/>
        <br/>
        <Link to="/login" className='FPlink'>Cancel</Link>
        </form>
      </div>
      <Footer/>
     
      
    </div>

    )
}
export default ForgetPassword