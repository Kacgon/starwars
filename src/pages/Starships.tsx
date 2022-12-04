import React, { useState } from "react"
import axios from "axios"
import { StarshipsPost } from "../components/StarshipsPost";



const Starships = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [starships, setStarships] = React.useState([]);

  React.useEffect(() => {
    getData();

  }, [])




const getData = () => {
  const ENDPOINT = "https://swapi.py4e.com/api/starships";
  axios(ENDPOINT)
    .then((response: any ) => {
      setIsLoading(false);
      console.log("RES-starships", response.data.results);

      if (response.data.results) {
        setStarships(response.data.results);
      }
      
  })  
  .catch(error => {
    setIsLoading(false);
    console.log("mamy blad", error);
  })
}
 
const starshipsRender = starships.map((starship: any) => (
  <div className="title" key={starship.name}>
    <StarshipsPost {...starship} />
  </div>
))



const content = isLoading ? <div>Loading..</div> : 
<div>{starshipsRender}</div>

return <h1>{content} </h1>
}
export default Starships;