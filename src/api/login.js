import axios from "axios";

export const login = (body) => {
  axios.get("http://localhost:4000/login", body);
};
