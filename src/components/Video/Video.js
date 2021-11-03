import React, { useEffect, useState } from "react";
import "./Video.css";

import { AiFillEye } from "react-icons/ai";
import request from "../../Api";
import { LazyLoadImage } from "react-lazy-load-image-component";

import moment from "moment";
import numeral from "numeral";

const Video = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
    contentDetails,
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [ChannelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const duration_time = moment.utc(seconds * 1000).format("mm:ss");

  const _videoId = id?.videoId || id;

  useEffect(() => {
    const getvideodetails = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: _videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    getvideodetails();
  }, [_videoId]);

  useEffect(() => {
    const getchannelicon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    getchannelicon();
  }, [channelId]);

  return (
    <div className="video">
      {/*---------------create video top section----------------*/}
      <div className="video__top">
        <LazyLoadImage className="video__img" src={medium.url} effect="blur" />
        <span className="video__time">{duration_time}</span>
      </div>
      {/*---------------create video title section----------------*/}
      <div className="video__title">
        create a app in 10 minutes #made by kalyan
      </div>
      {/*---------------create video channel section----------------*/}
      <div className="video__channel">
        <LazyLoadImage
          className="video__channel__img"
          src={ChannelIcon?.url}
          effect="blur"
        />
        <p className="channel">{channelTitle}</p>
      </div>
      {/*---------------create video details section----------------*/}
      <div className="video__details">
        <span className="details">
          <AiFillEye /> {numeral(views).format("0.a")} Views •{" "}
          {moment(publishedAt).fromNow()}
        </span>
      </div>
    </div>
  );
};

export default Video;
