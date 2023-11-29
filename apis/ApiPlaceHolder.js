import axios from "axios";

export default axios.create({
  baseURL: "http://206.189.32.75:8000/api/v1",
  config: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
