import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

export default function Recipes() {
  const [data, setData] = useState(null);
  const [body, setBody] = useState({
    name:'piyush',
    ingredients:'We strongly believe global challenges need global solutions. We are continually engaging with our employees, clients, partners, public institutions, and community organisations across the world to step up',
    instruction: "We strongly believe global challenges need global solutions. We are continually engaging with our employees, clients, partners, public institutions, and community organisations across the world to step up"
  });
  useEffect(() => {
    
    const url = "/api/v1/recipes/create";
    
    const token = document.querySelector('meta[name="csrf-token"]').content;
    let config = {
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }
    }

    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "X-CSRF-Token": token,
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(body)
    // })
    //   .then(response => {
    //     if (response.ok) {
    //       return response.json();
    //     }
    //     throw new Error("Network response was not ok.");
    //   })
    //   .then(response => console.log(response))
    //   .catch(error => console.log(error.message));

      Axios.post(url,body,config).then(response => {
        console.log(response.data)
      })
      .catch(error => console.log(error));

  }, []);
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
}
