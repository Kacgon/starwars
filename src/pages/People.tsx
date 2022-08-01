import React, { useState } from "react"
import axios from "axios"
import { PeoplePost } from "../components/PeoplePost";

const People = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [people, setPeople] = React.useState([]);

  React.useEffect(() => {
    getData();

  }, [])




const getData = () => {
  const ENDPOINT = "https://swapi.dev/api/people";
  axios(ENDPOINT)
    .then((response: any ) => {
      setIsLoading(false);
      console.log("RES-people", response.data.results);

      if (response.data.results) {
        setPeople(response.data.results);
      }
      
  })  
  .catch(error => {
    setIsLoading(false);
    console.log("mamy blad", error);
  })
}
 
const peopleRender = people.map((person: any) => (
  <div key={person.name}>
    <PeoplePost  {...person}/>
  </div>
))


const content = isLoading ? <div>Loading..</div> : 
<div>{peopleRender}</div>

return <h1>{content} </h1>
}
export default People;