import React, { useState } from "react"
import axios from "axios"
import { SpeciesPost } from "../components/SpeciesPost";

const Films = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [species, setSpecies] = React.useState([]);

  React.useEffect(() => {
    getData();

  }, [])




const getData = () => {
  const ENDPOINT = "https://swapi.py4e.com/api/species";
  axios(ENDPOINT)
    .then((response: any ) => {
      setIsLoading(false);
      console.log("RES-species", response.data.results);

      if (response.data.results) {
        setSpecies(response.data.results);
      }
      
  })  
  .catch(error => {
    setIsLoading(false);
    console.log("mamy blad", error);
  })
}
 
const speciesRender = species.map((specie: any) => (
  <div key={specie.name}>
    <SpeciesPost {...specie}/>
  </div>
))


const content = isLoading ? <div>Loading..</div> : 
<div>{speciesRender}</div>

return <h1>{content} </h1>
}
export default Films;