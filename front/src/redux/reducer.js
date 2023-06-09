import { GET_RECIPES, FILTER_BY_SEASON, GET_RECIPE_NAME} from "./action-types";


const initialState = {
    recipes: [],
    allRecipes: []
}

const rootReducer =(state=initialState, action) => {
    switch(action.type){
    case GET_RECIPES:
        return {
              ...state, 
              recipes: action.payload,
              allRecipes: action.payload
        }
    case FILTER_BY_SEASON:
        const allRecipes = state.allRecipes
        const recipeFiltered = action.payload === "All"
        ? allRecipes 
        : allRecipes.filter(el => el.season.includes(action.payload))
        return {
        ...state,
        recipes: recipeFiltered
        }
    case GET_RECIPE_NAME:        
    return{
        ...state,
        recipes: action.payload
    }
    default:
        return{...state}; 
    }
    

}

export default rootReducer;