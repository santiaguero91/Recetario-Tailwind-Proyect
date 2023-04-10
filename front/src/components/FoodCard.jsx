import { Link } from 'react-router-dom';
import React from "react";


export default function FoodCard({id , name,  duration, season, img,onClose})  {
    return ( 
        <div className="
        mx-auto
        text-white
        max-w-sm p-6 
        rounded-2xl shadow 
        hover:bg-gray-700
        bg-gray-800 
        border-gray-700 
        my-5       
        "       
        >
        <button onClick={onClose}>X</button>
        <h2>{id}</h2>
        <h2>{name}</h2>
         <div>
         <h2>{duration}</h2>
         <h2>{season}</h2>
        </div>
        <img className="
        w-24 h-24 
        md:w-48 md:h-auto 
        rounded-2xl
        mx-auto" 
        src={img} alt={name} />       

        <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
          <Link to={`/detail/${id}`}>More</Link>
        </button> 

        </div>
        );
}
