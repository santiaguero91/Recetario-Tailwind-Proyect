import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import FoodCard from "../components/FoodCard"
import axios from "axios";


function Home() { 

  const [characters, setCharacters] = useState([]);

  const onSearch = async () => {

      const result = await axios("http://localhost:3001/getChars")
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

     return <div>
    <div > 
        <Link to="/">
          <button class=" bg-blue-500 hover:bg-green-700 text-white font-bold py-4 px-8  rounded" >TO LANDING</button>
        </Link>
        
        <div class="bg-slate-50
        grid grid-cols-3 gap-4 my-2" 
        >
        <ul>
        {
        characters.map(({id, name, species, gender, image}) => (
        <FoodCard 
        key ={id}
        id={id}
        name={name}
        species={species}
        gender={gender}
        image={image}
        onClose={() => onClose(id)}     
        /> 

        ))
        }

      </ul>
   </div>


    </div>

 </div>;
}

export default Home;


