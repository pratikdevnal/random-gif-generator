import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
const API_KEY = process.env.REACT_APP_GIPHY_APP_KEY;
export default function Random() {
  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const imageSourse = data.data.images.downsized_large.url;
    console.log(imageSourse);
    setGif(imageSourse);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(true);
  let clickHandler = () => {
    fetchData();
  };
  return (
    <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 my-[15px] py-10">
      <h1 className="text-2xl underline uppercase font-bold">A Random Gif</h1>
      {loading ? <Spinner /> : <img src={gif} alt="" srcset="" />}
      <button
        className="bg-white w-10/12 opacity-70 border border-black text-lg py-2 rounded-lg"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
}
