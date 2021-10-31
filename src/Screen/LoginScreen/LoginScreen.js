import React from "react";
import "./Loginscreen.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/Auth";

function LoginScreen() {
  const dispatch = useDispatch(); //import useDispatch from react-redux

  //create login function
  const handleLogin = () => {
    dispatch(login());
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          className="login__img"
          src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt=""
        />
        <button className="login__button" onClick={handleLogin}>
          Login with google
        </button>
        <p className="clone">Youtube Clone </p>
      </div>
    </div>
  );
}

export default LoginScreen;
