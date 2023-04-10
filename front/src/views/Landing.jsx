import { Link } from "react-router-dom";
import React from "react";


function Landing() { 
    return <div className=" w-full h-screen grid grid-cols-1 justify-center content-center">
        <Link to="/home">
          <button className=" bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-4 px-8  rounded-lg border-4 border-white-500" >TO HOME</button>
        </Link>
    </div>


}
export default Landing;