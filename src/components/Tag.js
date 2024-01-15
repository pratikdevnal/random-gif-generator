import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
const API_KEY = process.env.REACT_APP_GIPHY_APP_KEY;
export default function Tag() {
  const [tag, setTag] = useState("");
  const { gif, loading, fetchData } = useGif(tag);
  let changeHandler = (event) => {
    setTag(event.target.value);
  };
  return (
    <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 my-[15px] py-10">
      <h1 className="text-2xl underline uppercase font-bold">
        A Random {tag} Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} alt="" srcset="" />}
      <input
        type="text"
        className="bg-white text-center w-10/12 opacity-70 border border-black text-lg py-2 rounded-lg"
        onChange={changeHandler}
        value={tag}
      />
      <button
        className="bg-white w-10/12 opacity-70 border border-black text-lg py-2 rounded-lg"
        onClick={() => {
          fetchData(tag);
        }}
      >
        Generate
      </button>
    </div>
  );
}
