import React from "react";
import "./Video.css";

import { AiFillEye } from "react-icons/ai";

function Video() {
  return (
    <div className="video">
      {/*---------------create video top section----------------*/}
      <div className="video__top">
        <img
          className="video__img"
          src="	https://i.ytimg.com/vi/KDcQrorXJ8U/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAt5foQVs-0rbNs0MHUoNiJ4P_Acw"
          alt=""
        />
        <span className="video__time">10:30</span>
      </div>
      {/*---------------create video title section----------------*/}
      <div className="video__title">
        create a app in 10 minutes #made by kalyan
      </div>
      {/*---------------create video channel section----------------*/}
      <div className="video__channel">
        <img
          className="video__channel__img"
          src="https://yt3.ggpht.com/ytc/AKedOLRBxyT5Y9xKYWPmnShA_utGUvcJnxWaFmc0CtWTkg=s68-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <p className="channel">My Vlogs</p>
      </div>
      {/*---------------create video details section----------------*/}
      <div className="video__details">
        <span className="">
          <AiFillEye /> 1m views • 2months ago
        </span>
      </div>
    </div>
  );
}

export default Video;
