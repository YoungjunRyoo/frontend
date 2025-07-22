import FoodCard from "../components/FoodCard"
import {useState} from "react"
import "../css/Home.css"


function Home(){
    
    
    return(
        <div className="home">
            <div className="head-image">
                <img src={"images/poster/poster3.png"} alt="poster3" />
                <img src={"images/poster/poster4.png"} alt="poster4" />
                <img src={"images/poster/poster2.png"} alt="poster2" />
                <img src={"images/poster/poster1.png"} alt="poster1" />
            </div>
        </div>
  );
}

export default Home