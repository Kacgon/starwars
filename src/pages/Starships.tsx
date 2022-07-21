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
      console.log("RES-films", response.data.results);

      if (response.data.results) {
        setStarships(response.data.results);
      }
      
  })  
  .catch(error => {
    setIsLoading(false);
    console.log("mamy blad", error);
  })
}
  
const content = isLoading ? <div>Loading..</div> : 
<div><pre>{JSON.stringify(starships, null , 2)}</pre></div>

return <h1>{content} </h1>
}
export default Starships;