import { Link } from "react-router-dom";
import React from "react";


function Landing() { 
    return <div>
        <h1>ESTO ES EL LANDING</h1>
        <Link to="/home">
          <button class=" bg-blue-500 hover:bg-green-700 text-white font-bold py-4 px-8  rounded" >TO HOME</button>
        </Link>
        <Link to="/old">
          <button class=" bg-blue-500 hover:bg-green-700 text-white font-bold py-4 px-8  rounded" >TO OLD</button>
        </Link>
    </div>


}
export default Landing;