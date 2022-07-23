import React, { useState } from "react"
import axios from "axios"

const Films = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [films, setFilms] = React.useState([]);

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
        setFilms(response.data.results);
      }
      
  })  
  .catch(error => {
    setIsLoading(false);
    console.log("mamy blad", error);
  })
}
  
const filmsRender = films.map((film: any) => (
  <div key={film.title}>
    <h1 >{film.title} {film.episode_id}</h1>
      <h2 >{film.opening_crawl}</h2>
  </div>
))

const content = isLoading ? <div>Loading..</div> : 
<div>{filmsRender}</div>

return <h1>{content} </h1>
}
export default Films;