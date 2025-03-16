import '../styles/Home.css'   // Use two dots (..) if file is in another folder
import Header from '../components/Header.jsx'    //importing Header component
import Navbar from '../components/Navbar.jsx'    //importing Navbar component
import Center from '../components/Center.jsx'    //importing Center component
import Footer from '../components/Footer.jsx'    //importing Footer component
import Mid4 from '../components/Mid4.jsx'    //importing Mid4 component
import Mid1 from '../components/Mid1.jsx'    //importing Mid1 component
import Mid2 from '../components/Mid2.jsx'    //importing Mid1 component

function Home() {
  return (
    <div className='Full'>
      <Header/>
      <Navbar/>  
      <Center/>
      <Mid1/>
      <Mid2/>
      <Mid4/>
      <Footer/>
     
      
    </div>
  )
}

export default Home
