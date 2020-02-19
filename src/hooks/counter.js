import React, { useState, useEffect } from "react";
import useToggle from "./useToggle";
import Axios from "axios";

export default function Counter() {
  const [count, setCounter] = useState(0);
  const [nameToggle, haneleName] = useToggle(true);
  const [likeToggle, handleLike] = useToggle(false);
  const [movies, Setmovies] = useState([]);
  function Increment() {
    setCounter(count + 1);
  }
  // ComponentDidMoun
  // ComponentDidUpdate
  // ComponentWillUnmount
  useEffect(() => {
    console.log("effect called");
    function apiCalled() {
      Axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=e7a14856d7aa0556a3cc058dc2896bbe&language=en-US&page=1"
      ).then(res => Setmovies(res.data.results));
    }
    apiCalled();
  }, []);
  console.log("Render called");

  return (
    <>
      {nameToggle ? (
        <h1>Your Name is : Sumana</h1>
      ) : (
        <h1>Your Name is : Unlnown</h1>
      )}
      {nameToggle ? (
        <h1>Your Name is : Sumana</h1>
      ) : (
        <h1>Your Name is : Unlnown</h1>
      )}
      {likeToggle ? (
        <h1>Your Name is : Sumana</h1>
      ) : (
        <h1>Your Name is : Unlnown</h1>
      )}
      <button onClick={haneleName}>Update</button>
      <button onClick={handleLike}>Like</button>
      <h1 onClick={Increment}>Your Counter is:{count}</h1>
    </>
  );
}
