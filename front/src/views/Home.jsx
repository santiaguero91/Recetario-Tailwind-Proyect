import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import FoodCard from "../components/FoodCard"


function Home() { 

  const [characters, setCharacters] = useState([]);

  const onSearch = () => {
    fetch(`http://localhost:3001/rickandmorty/character/2`)
       .then((response) => response.json())
       .then((data) => {
        console.log(data);
          if (data) {
             setCharacters((Chars) =>(data));
             console.log(data);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       })
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
    <div class="container mx-auto mt-5"> 
        <Link to="/">
          <button class=" bg-blue-500 hover:bg-green-700 text-white font-bold py-4 px-8  rounded" >TO LANDING</button>
        </Link>
        
        <div>
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


