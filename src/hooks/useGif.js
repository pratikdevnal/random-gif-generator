import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_GIPHY_APP_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
export default function useGif(tag) {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchData(tag) {
    setLoading(true);
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imageSourse = data.data.images.downsized_large.url;
    setGif(imageSourse);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loading, fetchData };
}
