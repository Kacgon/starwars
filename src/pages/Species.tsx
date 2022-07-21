import React, { useState } from "react"
import axios from "axios"

const Films = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [species, setSpecies] = React.useState([]);

  React.useEffect(() => {
    getData();

  }, [])




const getData = () => {
  const ENDPOINT = "https://swapi.dev/api/films";
  axios(ENDPOINT)
    .then((response: any ) => {
      setIsLoading(false);
      console.log("RES-films", response.data.results);

      if (response.data.results) {
        setSpecies(response.data.results);
      }
      
  })  
  .catch(error => {
    setIsLoading(false);
    console.log("mamy blad", error);
  })
}
  
const content = isLoading ? <div>Loading..</div> : 
<div><pre>{JSON.stringify(species, null , 2)}</pre></div>

return <h1>{content} </h1>
}
export default Films;