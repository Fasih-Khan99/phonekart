import '../styles/Mid1.css'   // Use two dots (..) to go up one level
import { useNavigate } from "react-router-dom";
import video from '../assets/video/video1.mp4'

function Mid1(){
    const navigate = useNavigate();   //constant variable navigate
    return(
        <div className='mid1'>
            <h1>WHAT'S HOT?</h1>
            <br/>
            <div className='VideoC'>
                <video src={video}  autoPlay loop muted playsInline/>
                <br/>
                <button className="Buybutton" onClick={() => navigate("/samsung")}>BUY NOW</button>
            </div>

        </div>
    )
}

export default Mid1