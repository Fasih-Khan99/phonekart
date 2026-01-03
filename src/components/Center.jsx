import { useState, useEffect } from "react";
import '../styles/Center.css'   // Use two dots (..) to go up one level
import salepic from '../assets/sale.jpg'
import galaxys25 from '../assets/galaxyS25.jpg'
import partner1 from '../assets/pt1.png'
import partner2 from '../assets/pt2.png'
import smarttv from '../assets/mitv2.jpg'

function Center(){
    const [currentImage, setCurrentImage] = useState(salepic); //Stores the current image (salepic initially).
    const [fade, setFade] = useState(true); // Controls fade effect

    useEffect(() => {                                     //useEffect runs setInterval() to switch images every 5 seconds.
        const interval = setInterval(() => {
            setFade(false); // Start fade out
            setTimeout(() => {
               setCurrentImage((prevImage) => {
                    if (prevImage === salepic) return galaxys25;
                    if (prevImage === galaxys25) return partner1;
                    if (prevImage === partner1) return partner2;
                    if (prevImage === partner2) return smarttv;
                    return salepic; // Loop back to first image
                 });
                setFade(true); // Start fade in
            }, 500); // Wait for fade-out to complete before switching image
        }, 5000); // Change every 5 seconds
    
        return () => clearInterval(interval); //Cleanup to prevent memory leaks, ensures that interval stops when component unmounts.
      }, []); // Runs only once when component mounts

      
    const styles = {
        centerimage: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: fade ? 1 : 0, // Fade effect
          transition: "opacity 0.5s ease-in-out", // Smooth fade effect
        },
      };
    return(
        <div className="Center1">
            <img src={currentImage} style={styles.centerimage} alt="Center Pic"></img>
        </div>
    )
}
export default Center