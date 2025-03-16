import '../styles/Signup.css'   // Use two dots (..) if file is in another folder
import Header from '../components/Header.jsx'    //importing Header component
import Navbar from '../components/Navbar.jsx'    //importing Navbar component
import Footer from '../components/Footer.jsx'    //importing Footer component
import {useState} from "react"
import loginpic from '../assets/loginuser.png'
import pass from '../assets/password.png'
import { Link, useNavigate } from 'react-router-dom'; // Import Link for internal navigation
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth, db} from "../firebase";
import { doc, setDoc } from "firebase/firestore"; // Firestore functions
import {ToastContainer, toast} from "react-toastify";   //temporary notification message 

function Signup() {
  const [username, setUsername] = useState("");     
  const [phone, setPhone] = useState("");  
  const [email, setEmail] = useState("");     
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // For navigation after signup

  const handleSignup = async(e)=>{
    e.preventDefault();
    if (!username || !email || !password || !phone) {
      alert("Error, Please fill in all fields");
      return;
    }
  
    try{
       // Create user in Firebase Authentication
       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
       const user = userCredential.user;
       
       // Save user details to Firestore
       await setDoc(doc(db, "users", user.uid), {
         username,
         phone,
         email,
         createdAt: new Date()
       });
       toast.success("User registered successfully!", {position: "top-center", autoClose: 1500, hideProgressBar: true});
       setTimeout(() => navigate("/login"), 3000); // Redirect after 3s
    }
    catch(error){
      toast.error(`Signup Failed: ${error.message}`, { position: "top-center", autoClose: 1500, hideProgressBar: true});
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
      <div className='Signupbox'>
              <br/><br/>
              <form className='Signupform' onSubmit={handleSignup} >
                <h1 style={{fontSize:25, color: "white", textAlign:"center", marginTop:-80, marginBottom: 70}}>REGISTER</h1>
                <br/>
                <img  src={loginpic} style={{width:"100px", height:"100px", marginLeft:"120px", marginTop:"-100px"}} alt="Login Pic"></img>
                <br/>
                <img  src={loginpic} style={{width:"40px", height:"40px", marginLeft:"20px", marginBottom:-13}} alt="Login Pic"></img>
                <input
                  type='text'
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                  placeholder='User Name'
                  required
                />
                <br/><br/>
                <img  src={loginpic} style={{width:"40px", height:"40px", marginLeft:"20px", marginBottom:-13}} alt="Login Pic"></img>
                <input
                  type='number'
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                  placeholder='Phone Number'
                  required
                />
                <br/><br/>
                <img  src={loginpic} style={{width:"40px", height:"40px", marginLeft:"20px", marginBottom:-13}} alt="Login Pic"></img>
                <input
                  type='text'
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
              <Link to="/forgetpassword" className='Signuplink'>Forget Password?</Link>
              <br/><br/>
              <button type="submit" className="Signupbtn">SIGN UP</button><br/>
              <br/>
              <h1 style={{fontSize:15, color:"white", textAlign:"center"}}>Already have an account?</h1>
              <Link to="/login" className='Signuplink2'>Login</Link>
              </form>
            </div>
      <Footer/>
     
      
    </div>
  )
}

export default Signup
