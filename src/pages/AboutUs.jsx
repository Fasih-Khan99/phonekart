import '../styles/AboutUs.css'   // Use two dots (..) if file is in another folder
import Header from '../components/Header.jsx'    //importing Header component
import Navbar from '../components/Navbar.jsx'    //importing Navbar component
import Footer from '../components/Footer.jsx'    //importing Footer component
import Karan from '../assets/Karan.png'
import khurram from '../assets/khurram.jpg'
import afk4 from '../assets/afk4.png'

function AboutUs() {
  return (
    <div className='Full'>
      <Header/>
      <Navbar/>  
      <div className='Owners'>
        <div className='card1'>
          <img src={khurram} style={{width:"150px", height:"150px", margin:"10px", marginLeft:50}} alt="khurram shahzad"></img>
          <h1 style={{fontSize:18, color:"black", textAlign:"center"}}>MR. KHURRAM SHAHZAD</h1>
          <h2 style={{fontSize:13, color:"black", textAlign:"center"}}>CFO TECHNOVA PVT LTD</h2>
        </div>
        <div className='card2'>
          <img src={Karan} style={{width:"150px", height:"150px", margin:"10px", marginLeft:50}} alt="arif habib"></img> 
          <h1 style={{fontSize:18, color:"black", textAlign:"center"}}>MR. KARAN KABIR</h1>
          <h2 style={{fontSize:13, color:"black", textAlign:"center"}}>CEO TECHNOVA PVT LTD</h2>
        </div>
        <div className='card3'>
          <img src={afk4} style={{width:"150px", height:"150px", margin:"10px", marginLeft:50}} alt="faris kazmi"></img>
          <h1 style={{fontSize:18, color:"black", textAlign:"center"}}>MR. FASIH KHAN</h1>
          <h2 style={{fontSize:13, color:"black", textAlign:"center"}}>CEO TEAM AFK</h2>
        </div>
      </div>
      <div className='About1'>
          <h1 style={{fontSize:25, color: "black"}}>ABOUT US</h1>
          <div className='info'>
          <p style={{fontSize:15, color: "rgb(113, 121, 126)", textAlign:"justify", margin:250, marginTop:0}}>
            Founded in 2024 as most reliable online shopping place, 
            Phonekart Owned by TechNova Pvt Ltd,
            is one of the first brand in Pakistan to deliver authenticity and sell smart devices at great value. 
            Today, we offer collections that are wide-ranging and varied for all ages. 
            Our brand offers an eclectic mix of smart devices, that are with the latest 
            technologies and trends. We curate collections with a unique vision of what’s best for everyone without 
            compromising on our vision to always offer inspiring brands with unbeatable value for money.<br/><br/>

            Phonekart is most reliable online shopping destination which justifies its dominance by bringing everything 
            authentic & endorsed by top brands. Technology & trends seem to change at lightning speed, yet Phonekart shopping 
            experience has managed to keep up without any hiccups. In addition, Phonekart has vowed to serve customers to 
            the best of its ability by introducing its first-ever loyalty program.
            Phonekart aims to become Pakistan’s no. 1 online tech shopping destination. Our sincere efforts, digital enhancements 
            and a team of dedicated personnel with an equally loyal customer base makes us the online platform for today’s 
            new Pakistan.<br/><br/>

            Today Phonekart sits on top of the online shopping game with an astounding social media following, a loyalty program 
            dedicated to its customers, and tempting, hard-to-say-no-to deals.<br/><br/>

            Another reason why Phonekart is the best of all online stores is the complete convenience that it offers. 
            You can view your favourite brands with price options for different products in one place. A user-friendly interface
            will guide you through your selection process. Comprehensive product comparisons, product information and 
            high-resolution images help you make the best buying decisions. You also have the freedom to choose your payment options,
            be it card or cash-on-delivery.  Additionally, the techgeek guidance option for selecting products takes 
            customer-friendliness to the next level.

            Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. 
            You can also shop for your friends, family and loved-ones and avail our gift services for special occasions.</p>

          </div>

        </div>
      <Footer/>
     
      
    </div>
  )
}

export default AboutUs
