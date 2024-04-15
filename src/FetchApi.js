import React, { useEffect } from "react";

const FetchApi = () => {
  const BASE_URL = "https://youtube-v31.p.rapidapi.com";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchFromAPI = async (url) => {
      try {
        const response = await fetch(`${BASE_URL}/${url}`, options);
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    };

    fetchFromAPI("your-endpoint");
  }, []);

  return <div></div>;
};

export default FetchApi;
