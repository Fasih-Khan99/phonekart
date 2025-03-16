import '../styles/Policies.css'   // Use two dots (..) if file is in another folder
import Header from '../components/Header.jsx'    //importing Header component
import Navbar from '../components/Navbar.jsx'    //importing Navbar component
import Footer from '../components/Footer.jsx'    //importing Footer component

function ReturnPolicy() {
  return (
    <div className='Full'>
      <Header/>
      <Navbar/>  
      <div className='return'>
          <h1 style={{fontSize:25, color: "black", marginLeft:50, marginBottom:20}}>RETURN POLICY</h1><hr/>
          <br/>
          <h1 style={{fontSize:15, color: "black", marginLeft:250, textAlign:"left"}}>Our return policy allows you to exchange a product in two cases:</h1>
          <h1 style={{fontSize:15, color: "black", marginLeft:250, textAlign:"left"}}>(1) If received a wrong product.</h1>
          <h1 style={{fontSize:15, color: "black", marginLeft:250, textAlign:"left"}}>(2) If received a defected/damaged product.</h1>
          <p style={{fontSize:15, color: "rgb(113, 121, 126)", textAlign:"justify",marginLeft:250, marginTop:0}}>
          However, to complete replacement of your product, the product should be:
          <br/> • If a wrong/ defected/ damaged product is delivered, we will get it picked up for free.
          <br/> • The product should be sealed in its original product packaging.
          <br/> • The product should be unused and the packaging should not be damaged.
          <br/> • Do not put tape or stickers on the manufacturers box.
          <br/> • The exchange request should be made within 72 hours of receipt of the delivery package.
          <br/> • Once the wrong product is received by us, we will dispatch the correct product within 5-7 working days.
          <br/> • We will expedite exchange once we have received and inspected the product.
          </p><br/>

          <h1 style={{fontSize:15, color: "black", marginLeft:250, textAlign:"left"}}>PLEASE NOTE: </h1>
          <p style={{fontSize:15, color: "rgb(113, 121, 126)", textAlign:"justify", marginLeft:250, marginTop:0}}>
          <br/>• Products cannot be returned or exchanged if the package is opened or damaged.
          <br/>• All the accessories are without any warranty and will only be exchanged if the box is not opened.
          <br/>• It is important to print out and paste the return label on your return parcel to avoid any inconvenience/delay in process of your return.
          </p><br/>

         
        </div>
      <Footer/>
     
      
    </div>
  )
}

export default ReturnPolicy
