import React, { useEffect, useState } from "react";

const CONTEXT_KEY = "b298bf6edc55a44ee";
const API_KEY = "AIzaSyAILbr1Y42A6xP1VMv4MOQ9SSVMSlipAd8"

const useGoogleSearch = (query) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${query}`
        );

        if (!response.ok) {
          throw new Error(`Error fetching Google Search results: ${response.statusText}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        console.log("error:" + err);
      }
    };

    if (query) { 
      fetchData();
    }
  }, [query]);

  return { data };
};

export default useGoogleSearch;