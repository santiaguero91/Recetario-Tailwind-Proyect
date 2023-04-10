import { Link } from 'react-router-dom';
import React from "react";


export default function FoodCard({id , name,  duration, season, img,onClose})  {
    return ( 
      <div className='grid grid-cols-2
      justify-items-center
      content-center
      mx-auto
      w-3/4 
      h-72

      rounded-2xl shadow 
      hover:bg-gray-700
      bg-gray-800 
      border-gray-700 
      my-5  '>
        <div className='
      text-white
      text-lg

        '>
        <div className='flex'>
        <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={onClose}>X</button>
        </div>
        <h2>{id}</h2>
        <h2 className='font-bold underline underline-offset-2'>{name}</h2>
         <div>
         <h2> Preparación: {duration} horas</h2>
         <h2> Temporada: {season}</h2>
        </div>
        </div>

        <div>
        <img className="md:w-72 md:h-auto rounded-2xl mx-auto" 
        src={img} alt={name} />       
        <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
          <Link to={`/detail/${id}`}>More</Link>
        </button> 
        </div>
        </div>
        );
}
