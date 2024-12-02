/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";

export function  useFetch(url){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(""); // Error state

    useEffect(() => {
        /* setTimeout(() => { */
          /* Axios parses the data to json by default */
          axios.get(url) // Make sure the URL is correct
            /* fires a function onde the promise has been answered */
            .then((response) => {
              //console.log(response.data)
              setData(response.data);
              setLoading(false); // Set loading to false after data is fetched
          })
          .catch((error) => {
            console.error(error);
            setError("Failed to fetch users."); // Set error message
            setLoading(false); // Stop loading
          });
        /* }, 1500) */

        
    
      }, [url]);

      return {data, loading, error}
    
}