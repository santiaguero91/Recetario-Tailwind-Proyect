import { Link } from "react-router-dom";



function Home() { 
    return <div>
    <div class="container mx-auto mt-5"> 
        <Link to="/">
          <button class=" bg-blue-500 hover:bg-green-700 text-white font-bold py-4 px-8  rounded" >TO LANDING</button>
        </Link>
    </div>

 </div>;
}

export default Home;


