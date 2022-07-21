import React, { useState } from "react"
import axios from "axios"

const Vechicle = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [vechicle, setVechicle] = React.useState([]);

  React.useEffect(() => {
    getData();

  }, [])




const getData = () => {
  const ENDPOINT = "https://swapi.dev/api/vechicle";
  axios(ENDPOINT)
    .then((response: any ) => {
      setIsLoading(false);
      console.log("RES-films", response.data.results);

      if (response.data.results) {
        setVechicle(response.data.results);
      }
      
  })  
  .catch(error => {
    setIsLoading(false);
    console.log("mamy blad", error);
  })
}
  
const content = isLoading ? <div>Loading..</div> : 
<div><pre>{JSON.stringify(vechicle, null , 2)}</pre></div>

return <h1>{content} </h1>
}
export default Vechicle;