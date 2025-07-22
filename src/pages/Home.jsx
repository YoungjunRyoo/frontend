import FoodCard from "../components/FoodCard"
import {useState} from "react"
import "../css/Home.css"


function Home(){
    const [searchQuery, setSearchQuery] = useState("");

    const foods =[
        {id: 1, name: "SpamEgg", price: 14.99, image:"/images/foods/starter/spamEgg.png"},
        {id: 2, name: "tteokbokki", price: 23.99, image:"/images/foods/starter/tteokbokki.png"},
        {id: 3, name: "eggTot", price: 11.99, image:"/images/foods/starter/eggTot.png"},
        {id: 4, name: "frenchFries", price: 7.99, image:"/images/foods/starter/frenchFries.png"},
        {id: 5, name: "steamedEgg", price: 11.99, image:"/images/foods/starter/steamedEgg.png"},
        {id: 6, name: "eggRoll", price: 14.99, image:"/images/foods/starter/eggRoll.png"},
        {id: 7, name: "ramen", price: 8.99, image:"/images/foods/starter/ramen.png"},
        {id: 8, name: "edamame", price: 7.99, image:"/images/foods/starter/edamame.png"},
        {id: 9, name: "soondae", price: 22.99, image:"/images/foods/starter/soondae.png"},
        {id: 10, name: "haemulPajeon", price: 16.99, image:"/images/foods/starter/haemulPajeon.png"},
        {id: 11, name: "kimchiJeon", price: 16.99, image:"/images/foods/starter/kimchiJeon.png"},
        {id: 12, name: "cornCheese", price: 9.99, image:"/images/foods/starter/cornCheese.png"},
        {id: 13, name: "seaweedSalad", price: 11.99, image:"/images/foods/starter/seaweedSalad.png"},

    ]
    const handleSearch = (e) =>{
        e.preventDefault();
    }

    return(
        <div className="home">
            <div className="head-image">
                <img src="images/poster/poster3.png"/>
                <img src="images/poster/poster4.png"/>
                <img src="images/poster/poster2.png"/>
                <img src="images/poster/poster1.png"/>
            </div>
    
        </div>
    );
}

export default Home