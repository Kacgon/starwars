import React, { useState } from "react"
import axios from "axios"

const Starships = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [starships, setStarships] = React.useState([]);

  React.useEffect(() => {
    getData();

  }, [])




const getData = () => {
  const ENDPOINT = "https://swapi.dev/api/starships";
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
  <div key={starship.name}>
    <h1 >Name: {starship.name}</h1>
      <h2>Model: {starship.model}</h2>
      <h2>Manufacturer: {starship.manufacturer}</h2>
      <h2>Cost: {starship.cost_in_credits}</h2>    
  </div>
))



const content = isLoading ? <div>Loading..</div> : 
<div>{starshipsRender}</div>

return <h1>{content} </h1>
}
export default Starships;