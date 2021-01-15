import axios from "axios";

const KEY = "AIzaSyCvtKfshLrRCVISipDjMpcai299TU2NHUM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
