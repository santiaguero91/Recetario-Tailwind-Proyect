import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import FoodCard from "../components/FoodCard"
import axios from "axios";


function Home() { 

  const [characters, setCharacters] = useState([]);

  const onSearch = async () => {

      const result = await axios("http://localhost:3001/recipes")
      console.log("data", result);
      setCharacters(result.data)

    }

    const onClose = (id) =>{
      setCharacters(
        characters.filter(character => character.id !== id)
      )
     }

useEffect(() => {
  onSearch()
   }, []);

     return (
<div > 
  <Link to="/">
    <button class=" bg-blue-500 hover:bg-green-700 text-white font-bold py-4 px-8  rounded" >TO LANDING</button>
  </Link> 
  <div>
    <ul class="mt-10">
        {
        characters.map(({id, name, duration, season, img}) => (
        <FoodCard 
        key ={id}
        name={name}
        duration={duration}
        season={season}
        img={img}
        onClose={() => onClose(id)}     
        /> ))}
        </ul>
  </div>
</div>
 
 )
}

export default Home;


