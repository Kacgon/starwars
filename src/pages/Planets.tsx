import React, { useState } from "react"
import axios from "axios"

const Planets = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [planets, setPlanets] = React.useState([]);

  React.useEffect(() => {
    getData();

  }, [])




const getData = () => {
  const ENDPOINT = "https://swapi.dev/api/planets";
  axios(ENDPOINT)
    .then((response: any ) => {
      setIsLoading(false);
      console.log("RES-planets", response.data.results);

      if (response.data.results) {
        setPlanets(response.data.results);
      }
      
  })  
  .catch(error => {
    setIsLoading(false);
    console.log("mamy blad", error);
  })
}

const planetsRender = planets.map((planet: any) => (
  <div key={planet.name}>
    <h1 >Name: {planet.name}</h1>
      <h2>Rotation Period: {planet.rotation_period}</h2>
      <h2>Orbital Period: {planet.orbital_period}</h2>
      <h2>Diameter: {planet.diameter}</h2>
      <h2>Climate: {planet.climate}</h2>
  </div>
))


const content = isLoading ? <div>Loading..</div> : 
<div>{planetsRender}</div>

return <h1>{content} </h1>
}
export default Planets;