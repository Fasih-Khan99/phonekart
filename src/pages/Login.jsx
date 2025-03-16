import '../styles/Login.css'   // Use two dots (..) if file is in another folder
import Header from '../components/Header.jsx'    //importing Header component
import Navbar from '../components/Navbar.jsx'    //importing Navbar component
import Footer from '../components/Footer.jsx'    //importing Footer component
import {useState} from "react"
import loginpic from '../assets/loginuser.png'
import pass from '../assets/password.png'
import { Link, useNavigate } from 'react-router-dom'; // Import Link for internal navigation
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from "../firebase";
import {ToastContainer, toast} from "react-toastify";   //temporary notification message 



function Login() {
  const [email, setEmail] = useState("");     
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // For navigation after login


  const handleLogin = async(e)=>{
      e.preventDefault();
      if (!email || !password) {
        alert('Error', 'Please fill in all fields');
        return;
      }

      try{
        await signInWithEmailAndPassword(auth, email, password);
        
         toast.success("Login successful", {position: "top-center", autoClose: 1500, hideProgressBar: true});
         setTimeout(() => navigate("/"), 3000); // Redirect after 3s
      
      }
      catch(error){
        toast.error(`Login Failed: ${error.message}`, { position: "top-center", autoClose: 1500, hideProgressBar: true});
      }
    }
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
       
       /> {/* Toast container must be added for toasts to work */}
      <Header/>
      <Navbar/>  
      <div className='Loginbox'>
        <br/><br/>
        <form className='Loginform' onSubmit={handleLogin}>
          <h1 style={{fontSize:25, color: "white", textAlign:"center", marginTop:-80, marginBottom: 70}}>LOGIN FORM</h1>
          <br/>
          <img  src={loginpic} style={{width:"100px", height:"100px", marginLeft:"120px", marginTop:"-100px"}} alt="Login Pic"></img>
          <br/>
          <img  src={loginpic} style={{width:"40px", height:"40px", marginLeft:"20px", marginBottom:-13}} alt="Login Pic"></img>
          <input
            type='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Email Address'
            required
          />
          <br/><br/>
          <img  src={pass} style={{width:"40px", height:"40px", marginLeft:"20px", marginBottom:-13}} alt="Password"></img>
          <input
            type='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='Password'
            required
          />

        <br/><br/>
        <Link to="/forgetpassword" className='loginlink'>Forget Password?</Link>
        <br/><br/>
        <button type="submit" className="loginbtn">SIGN IN</button><br/>
        <br/>
        <h1 style={{fontSize:15, color:"white", textAlign:"center"}}>New here?</h1>
        <Link to="/signup" className='loginlink'>Create Account</Link>
        </form>
      </div>
      <Footer/>
     
      
    </div>
  )
}

export default Login
