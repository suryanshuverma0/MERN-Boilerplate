import api from "../api/axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    api.get("/health").then(res => console.log(res.data));
  }, []);

  return <h1 className="text-2xl text-green-600">MERN Boilerplate Ready</h1>;
}

export default App;
