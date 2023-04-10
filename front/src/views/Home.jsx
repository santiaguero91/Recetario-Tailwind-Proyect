import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import FoodCard from "../components/FoodCard"
import axios from "axios";
import SearchBar from "../components/SearchBar"
import {getRecipes , filterRecipesBySeason} from "../redux/actions"
import { useDispatch, useSelector} from "react-redux";


function Home() { 
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes)

  const [characters, setCharacters] = useState([]);

    const onClose = (id) =>{
      setCharacters(
        characters.filter(character => character.id !== id)
      )
     }

     function handleFilterSeason(event){
      dispatch(filterRecipesBySeason(event.target.value))
     }

useEffect(() => {
  dispatch(getRecipes())
   }, [dispatch]);

     return (
<div > 
<SearchBar/>
  <Link to="/">
    <button className=" bg-blue-500 hover:bg-green-700 text-white font-bold py-4 px-8  rounded" >TO LANDING</button>
  </Link> 

<div>
<select onChange={e=> handleFilterSeason(e)}>
        <option value="All">All Seasons</option>
        <option value="Summer">Summer</option>
        <option value="Autumn">Autumn</option>
        <option value="Winter">Winter</option>
        <option value="Spring">Spring</option>
</select>
</div>
  <div>
    <ul className="mt-10">
        {
        allRecipes.map(({id, name, duration, season, img}) => (
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


