import React from "react";
import "./Loginscreen.css";

function LoginScreen() {
  return (
    <div className="login">
      <div className="login__container">
        <img
          className="login__img"
          src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt=""
        />
        <button className="login__button">Login with google</button>
        <p className="clone">Youtube Clone </p>
      </div>
    </div>
  );
}

export default LoginScreen;
