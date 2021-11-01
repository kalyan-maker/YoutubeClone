import axios from "axios";
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyAjYg4yJNVn4OWTnLXChLYTiTV0fVXswGo",
  },
});

export default request;
