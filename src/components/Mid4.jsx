import '../styles/Mid4.css'   // Use two dots (..) to go up one level
import { useNavigate } from "react-router-dom";
function Mid4(){
    const navigate = useNavigate();   //constant variable navigate
    return(
        <>
        <div className="container1">
            <div className="container2">
                <div className="container3">
                    <h1 className='about'>ABOUT US</h1>
                    <p>
                    Founded in 2024 as the most reliable online shopping destination, 
                    PhoneKart (Owned by TechNova Pvt Ltd) is a pioneering brand in Pakistan dedicated to delivering authenticity 
                    and offering smart devices at unbeatable value. Established by Team AFK, we take pride in providing a seamless 
                    shopping experience for tech enthusiasts.<br/>
                    At PhoneKart, we curate an extensive collection of smartphones, and smart TVs, 
                    ensuring that our customers stay ahead with the latest technology trends. 
                    </p>
                    <button className="Readbutton" onClick={() => navigate("/aboutUs")}>READ MORE</button>
                </div>

            </div>
                
        </div>
        <div className='Kart'>
        <h1 className='kart1'>PHONEKART</h1>
        <h1 className='kart2'>ALWAYS ON YOUR SIDE WHEN YOU NEED HELP</h1>
        </div>
        </>
    );
}
export default Mid4