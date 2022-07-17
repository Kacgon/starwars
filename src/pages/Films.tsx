import React from "react"
import axios from "axios"

const Films = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    getData();

  }, [])


const getData = () => {
  const ENDPOINT = "https://swapi.dev/api/films";
  axios(ENDPOINT)
    .then((response: any ) => {
      setIsLoading(false);
    console.log("response", response.data)
  }).catch(error => {
    setIsLoading(false);
    console.log("mamy blad", error);
  })

}
const content = isLoading ? <div>Loading...Miejsce na Ikone ladowania</div> : <div>Data...</div>

return <h1> {content} </h1>
}
export default Films