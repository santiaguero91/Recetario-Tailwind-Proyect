

export default function FoodCard({ id , name,  species, gender, image,onClose})  {
    return ( 

        <div class="
        block max-w-sm p-6 
        bg-white border 
        border-gray-200 
        rounded-lg shadow 
        hover:bg-gray-100 
        dark:bg-gray-800 
        dark:border-gray-700 
        dark:hover:bg-gray-700">
        <button onClick={onClose}>X</button>
        <h2>{id}</h2>
        <h2>{name}</h2>
         <div>
         <h2>{species}</h2>
         <h2>{gender}</h2>
        </div>
        <img  src={image} alt={name} />       
        </div>
        );
}
