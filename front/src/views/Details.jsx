import React from "react";
import { useParams } from "react-router-dom";



const Details = () => {
    const { id } = useParams();
    return(
        <div>
            <p>Aca esta el Detail</p>

        </div>
    )

}
export default Details;