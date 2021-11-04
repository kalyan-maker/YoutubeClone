import axios from "axios";
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyBObymOC3RXXt_R9VOLBYnN2tEy_39vrd8",
  },
});

export default request;
