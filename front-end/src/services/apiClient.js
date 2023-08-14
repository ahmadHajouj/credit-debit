import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://credit-debit.vercel.app",
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export { CanceledError, setJwt };
