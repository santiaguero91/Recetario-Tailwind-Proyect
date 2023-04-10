import axios from "axios";
import { GET_RECIPES, FILTER_BY_SEASON, GET_RECIPE_NAME} from "./action-types";

export function getRecipes(){
    return async function(dispatch) {
    try {
    let json = await axios.get("http://localhost:3001/recipes");
    return dispatch({
        type: GET_RECIPES,
        payload: json.data
    })
    } catch (error){
    console.log(error);
    }
    }
}

export function filterRecipesBySeason(payload){
    return{
        type: FILTER_BY_SEASON,
        payload
    }
} 

export function searchRecipeName(name){
    return async function(dispatch) {
        try{
        var json = await axios.get("http://localhost:3001/recipes?name="+ name)
        return dispatch({
            type: GET_RECIPE_NAME,
            payload: json.data 
        }) 
    }catch (error){
        console.log(error);
    }
    }
}