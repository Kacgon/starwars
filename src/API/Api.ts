import axios from "axios";

export default axios.create({
  baseURL: "https://.dev/api/films",
  headers: {
    Accept: "starwars/json",
    "Content-Type": "application/json; charset=UTF-8",
  },
})