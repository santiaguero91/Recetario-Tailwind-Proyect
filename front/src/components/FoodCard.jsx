

export default function FoodCard({id , name,  duration, season, img,onClose})  {
    return ( 

        <div class="
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
        <h2 class="">{id}</h2>
        <h2>{name}</h2>
         <div>
         <h2>{duration}</h2>
         <h2>{season}</h2>
        </div>
        <img class="
        w-24 h-24 
        md:w-48 md:h-auto 
        rounded-2xl
        mx-auto" 
        src={img} alt={name} />       
        </div>
        );
}
