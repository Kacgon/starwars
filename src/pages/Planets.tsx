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
  
const content = isLoading ? <div>Loading..</div> : 
<div><pre>{JSON.stringify(planets, null , 2)}</pre></div>

return <h1>{content} </h1>
}
export default Planets;