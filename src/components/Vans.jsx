import { useEffect, useState } from "react";
import axios from "axios";

function Vans() {

    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetchVans();

    }, []);

    const fetchVans = () => {
        axios
            .get(`http://localhost:3200/vans`)
            .then((response) => {
                setVans(response.data);
            })
            .catch((error) => {
                console.error("Error fetching vans", error);
            });
            return vans
    };

    return (
       
        <div>
            <h1>Vans list:</h1> <br></br>
            {vans.map((van) =>(
               <div key={van.id}>
               <div>{van.name}</div>
               <div>{van.price}</div>
               <div>{van.description}</div>
               <img src={van.imageUrl} alt={van.name} />
               <div>{van.type}</div>
             </div>

            ) )}
        </div>
    )



}
export default Vans;