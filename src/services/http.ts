import axios from "axios";

export const apiSeaLog = () => axios.create({
  baseURL: `${process.env.REACT_APP_BASE_API}`,
  headers: {
    Accept: "application/json",
    ContentType: "application/json",
  },
});