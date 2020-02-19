import axios from "axios";
const KEY = "AIzaSyD6aVrromTpANfl4nkMc8qgiDHEGefme8Q";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
