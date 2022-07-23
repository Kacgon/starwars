import React, { useState } from "react"
import axios from "axios"

const Films = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [species, setSpecies] = React.useState([]);

  React.useEffect(() => {
    getData();

  }, [])




const getData = () => {
  const ENDPOINT = "https://swapi.dev/api/species";
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
    <h1 >Name: {specie.name}</h1>
      <h2>Classification: {specie.classification}</h2>
      <h2>Designation: {specie.designation}</h2>
      <h2>Average height: {specie.average_height}</h2>
      <h2>Skincolors: {specie.skin_colors}</h2>
  </div>
))


const content = isLoading ? <div>Loading..</div> : 
<div>{speciesRender}</div>

return <h1>{content} </h1>
}
export default Films;