import '../styles/Mid4.css'   // Use two dots (..) to go up one level
import { useNavigate } from "react-router-dom";
function Mid4(){
    const navigate = useNavigate();   //constant variable navigate
    return(
        <>
        <div className="container1">
            <div className="container2">
                <div className="container3">
                    <h1 style={{fontSize:20, color:"white", textAlign:"center"}}>ABOUT US</h1>
                    <p style={{fontSize:15, color:"white", textAlign:"center", marginLeft:10}}>
                    Founded in 2024 as the most reliable online shopping destination, 
                    PhoneKart (Owned by Habib Metro Group) is a pioneering brand in Pakistan dedicated to delivering authenticity 
                    and offering smart devices at unbeatable value. Established by Team AFK, we take pride in providing a seamless 
                    shopping experience for tech enthusiasts.
                    At PhoneKart, we curate an extensive collection of smartphones, and smart TVs, 
                    ensuring that our customers stay ahead with the latest technology trends. 
                    </p>
                    <button className="Readbutton" onClick={() => navigate("/aboutUs")}>READ MORE</button>
                </div>

            </div>
                
        </div>
        <div className='Kart'>
        <h1 style={{fontSize:30, color:"black", marginLeft:100}}>#PHONEKART</h1>
        <h1 style={{fontSize:15, color:"grey", marginLeft:-180, marginTop:60}}>ALWAYS ON YOUR SIDE WHEN YOU NEED HELP</h1>
        </div>
        </>
    );
}
export default Mid4