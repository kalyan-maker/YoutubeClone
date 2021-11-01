import request from "../../Api";
import { HOME_VIDEOS_REQUEST } from "../ActionType";

export const getPopularVideos = () => async (dispatch) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });
    const res = await request("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "IN",
        maxResults: 20,
        pageToken: "",
      },
    });
    console.log(res);
  } catch (error) {}
};
