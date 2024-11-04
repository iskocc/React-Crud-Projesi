import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:4040" });

axios.get("http://localhost:4040/todos");
api.get("/todos");

export default api;
