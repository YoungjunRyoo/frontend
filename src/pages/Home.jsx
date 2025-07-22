import FoodCard from "../components/FoodCard"
import {useState} from "react"
import "../css/Home.css"


function Home(){
    const base = import.meta.env.BASE_URL;
    
    return(
        <div className="home">
            <div className="head-image">
                <img src={`${base}images/poster/poster3.png`} alt="poster3" />
                <img src={`${base}images/poster/poster4.png`} alt="poster4" />
                <img src={`${base}images/poster/poster2.png`} alt="poster2" />
                <img src={`${base}images/poster/poster1.png`} alt="poster1" />
            </div>
        </div>
  );
}

export default Home