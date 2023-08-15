import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export { CanceledError, setJwt };
