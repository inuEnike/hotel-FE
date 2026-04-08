import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://hotel-be-rpu5.onrender.com",
  //   baseURL: "http://127.0.0.1:8070/",
});
