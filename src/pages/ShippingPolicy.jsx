import '../styles/Policies.css'   // Use two dots (..) if file is in another folder
import Header from '../components/Header.jsx'    //importing Header component
import Navbar from '../components/Navbar.jsx'    //importing Navbar component
import Footer from '../components/Footer.jsx'    //importing Footer component

function ShippingPolicy() {
  return (
    <div className='Full'>
      <Header/>
      <Navbar/>  
      <div className='ship'>
          <h1 style={{fontSize:25, color: "black", marginLeft:50, marginBottom:20}}>SHIPPING AND CANCELLATION POLICY</h1><hr/>
          <br/>
          <h1 style={{fontSize:15, color: "black", textAlign:"left", marginLeft:250}}>Which locations do you deliver to?</h1>
          <p style={{fontSize:15, color: "rgb(113, 121, 126)", textAlign:"justify",marginLeft:250, marginTop:0}}>
          We deliver all over Pakistan.
          </p><br/>

          <h1 style={{fontSize:15, color: "black", textAlign:"left", marginLeft:250}}>What are your delivery times?</h1>
          <p style={{fontSize:15, color: "rgb(113, 121, 126)", textAlign:"justify", marginLeft:250, marginTop:0}}>
          For cities Rawalpindi, Lahore, Islamabad, Faisalabad, Sheikhupura and Kasur delivery time will be 24 hours(Mobile Phones only),
          <br/> and for locations other than the mentioned ones delivery time will be 2-3 business days.
          </p><br/>

          <h1 style={{fontSize:15, color: "black", textAlign:"left", marginLeft:250}}>How long would it take for me to receive my order?</h1>
          <p style={{fontSize:15, color: "rgb(113, 121, 126)", textAlign:"justify", marginLeft:250, marginTop:0}}>
          We would make every effort to deliver your order within 2-3 business days.
          </p><br/>

          <h1 style={{fontSize:15, color: "black", textAlign:"left", marginLeft:250}}>Why is my delivery delayed if I choose the following payment methods: (EasyPay)</h1>
          <p style={{fontSize:15, color: "rgb(113, 121, 126)", textAlign:"justify", marginLeft:250, marginTop:0}}>
          To ensure fool proof and secure transactions, these payment gateways hold deliveries for 24 hours. 
          As soon as we get a green signal from them, <br/> we dispatch the products immediately.
          </p><br/>

          <h1 style={{fontSize:15, color: "black", textAlign:"left", marginLeft:250}}>Can I modify my delivery address?</h1>
          <p style={{fontSize:15, color: "rgb(113, 121, 126)", textAlign:"justify", marginLeft:250, marginTop:0}}>
          Once the order has been placed, you cannot change the delivery address. You have to cancel the order and re-order the product with the correct address. 
          <br/> The payments, if you have already made, will be refunded to you.
          </p><br/>

          <h1 style={{fontSize:15, color: "black", textAlign:"left", marginLeft:250}}>How can I cancel my order?</h1>
          <p style={{fontSize:15, color: "rgb(113, 121, 126)", textAlign:"justify", marginLeft:250, marginTop:0}}>
          You can cancel your order when you receive a confirmation call for your order from our customer service representative.
          </p><br/>

          <h1 style={{fontSize:15, color: "black", textAlign:"left", marginLeft:250}}>Cancellation in case of Online payment:</h1>
          <p style={{fontSize:15, color: "rgb(113, 121, 126)", textAlign:"justify", marginLeft:250, marginTop:0}}>
          If you want to cancel the order after the product has been shipped, you need to speak to Phonekart customer care and make a request to cancel the order. 
          <br/> After the order has been cancelled, the money will be refunded to debit card, credit card, or internet banking account (whichever mode you have used
          <br/> for payment); as per the policy of the merchant.
          </p><br/>

          <h1 style={{fontSize:15, color: "black", textAlign:"left", marginLeft:250}}>PLEASE NOTE:</h1>
          <p style={{fontSize:15, color: "rgb(113, 121, 126)", textAlign:"justify", marginLeft:250, marginTop:0}}>
          Cancellations requests should not be sent via email and will be approved as applicable and/or a service representative will call you to discuss. 
          <br/> As needed, our representatives are able to assist with order adjustments and cancellation requests as well.
          <br/> Representatives may be reached at +92 3 111 555 142.
          </p><br/>

          <h1 style={{fontSize:15, color: "black", textAlign:"left", marginLeft:250}}>What can I do if the package was delivered to the wrong person?</h1>
          <p style={{fontSize:15, color: "rgb(113, 121, 126)", textAlign:"justify", marginLeft:250, marginTop:0}}>
          Please contact our delivery partners or PHONEKART customer service to get help on such issues.
          </p><br/>

          <h1 style={{fontSize:15, color: "black", textAlign:"left", marginLeft:250}}>Who is your delivery partner?</h1>
          <p style={{fontSize:15, color: "rgb(113, 121, 126)", textAlign:"justify", marginLeft:250, marginTop:0}}>
          We partner with Leopards and Swyft for deliveries.
          </p><br/>

          <h1 style={{fontSize:15, color: "black", textAlign:"left", marginLeft:250}}>How can I track my order and contact the courier if I have a complaint or enquiries?</h1>
          <p style={{fontSize:15, color: "rgb(113, 121, 126)", textAlign:"justify", marginLeft:250, marginTop:0}}>
          Please track your order details on Phonekart.com or directly through our delivery partners’ websites using your tracking number.
          <br/> LEOPARD: http://leopardscourier.com/pk/tracking/
          <br/> SWYFT: https://www.swyftlogistics.com/
          <br/> Our delivery partners’ contact information can be found on their websites.
          </p><br/>

          <h1 style={{fontSize:15, color: "black", textAlign:"left", marginLeft:250}}> Contact Us in case of any further queries</h1>
          
        </div>
      <Footer/>
     
      
    </div>
  )
}

export default ShippingPolicy
