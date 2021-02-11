import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

export default function Recipes() {
  const [data, setData] = useState(null);
  console.log(data);
  useEffect(() => {
    const url = "/api/v1/recipes/index";
    Axios.get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
}
