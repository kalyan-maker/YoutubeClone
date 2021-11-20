import React, { useEffect } from "react";
import "./Loginscreen.css";
import { useDispatch, useSelector } from "react-redux"; //custom imported react-redux
import { login } from "../../redux/actions/Auth";
import { useHistory } from "react-router-dom"; //custom imported react-router-dom

function LoginScreen() {
  const dispatch = useDispatch(); //import useDispatch from react-redux

  const accessToken = useSelector((state) => state.auth.accessToken); //access the token from authreducer

  //handlelogin button
  const handleLogin = () => {
    dispatch(login());
  };

  const history = useHistory();

  //useEffect if login with provider to go to homescreen
  useEffect(() => {
    if (accessToken) {
      history.push("/homescreen");
    }
  }, [accessToken, history]);

  return (
    <div className="login">
      {/*----------------login page---------------------*/}
      <div className="login__container">
        <img
          className="login__img"
          src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt=""
        />
        {/*-----button-----*/}
        <button className="login__button" onClick={handleLogin}>
          Login with google
        </button>
        <p className="clone">Youtube Clone </p>
      </div>
    </div>
  );
}

export default LoginScreen;
