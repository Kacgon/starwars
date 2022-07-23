import React, { useState } from "react"
import axios from "axios"

const Vechicle = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [vechicles, setVechicles] = React.useState([]);

  React.useEffect(() => {
    getData();

  }, [])




const getData = () => {
  const ENDPOINT = "https://swapi.dev/api/vehicles/";
  axios(ENDPOINT)
    .then((response: any ) => {
      setIsLoading(false);
      console.log("RES-vechicle", response.data.results);

      if (response.data.results) {
        setVechicles(response.data.results);
      }
      
  })  
  .catch(error => {
    setIsLoading(false);
    console.log("mamy blad", error);
  })
}
  
const vechiclesRender = vechicles.map((vechicle: any) => (
  <div key={vechicle.name}>
    <h1 >Name: {vechicle.name}</h1>
      <h2>Model: {vechicle.model}</h2>
      <h2>Manufacturer: {vechicle.manufacturer}</h2>
      <h2>Cost: {vechicle.cost_in_credits}</h2>    
  </div>
))


const content = isLoading ? <div>Loading..</div> : 
<div>{vechiclesRender}</div>

return <h1>{content} </h1>
}
export default Vechicle;