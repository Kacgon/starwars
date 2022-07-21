import axios from "axios";

export default axios.create({
  baseURL: "https://swapi.dev/api/films",
  headers: {
    Accept: "starwars/json",
    "Content-Type": "application/json; charset=UTF-8",
  },
})