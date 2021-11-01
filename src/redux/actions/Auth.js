import { app } from "../../components/firebase"; //import app from firebase

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth"; //import custom auth from firesbase.auth
import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
  LOG_OUT_FAIL,
} from "../ActionType";

export const login = () => async (dispatch) => {
  const auth = getAuth(app); //get firebase data using getAuth
  const provider = new GoogleAuthProvider(auth); //creating google auth provider
  provider.addScope(`https://www.googleapis.com/auth/youtube.force-ssl`); //youtube key for provider
  signInWithPopup(auth, provider) //when click on button get pop up to sign in
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken; //geet accesstoken from provider
      const user = result.user; // The signed-in user info.
      const profile = {
        name: user.displayName, //get user display name
        PhotoURL: user.photoURL, //get photourl for provider
      };

      //create session storage
      sessionStorage.setItem("clone-access-token", accessToken);
      sessionStorage.setItem("clone-user", JSON.stringify(profile));

      //using dispatch to get login request
      dispatch({
        type: LOGIN_REQUEST,
      });
      //if login success get accessToken
      dispatch({
        type: LOGIN_SUCCESS,
        payload: accessToken,
      });
      //after login success load profile and get user displayName and Photourl
      dispatch({
        type: LOAD_PROFILE,
        payload: profile,
      });
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error.message);
      const errorMessage = error.message;
      //if login fail display error message
      dispatch({
        type: LOGIN_FAIL,
        payload: errorMessage,
      });
    });
};

//create logout function
export const log_out = () => async (dispatch) => {
  const auth = getAuth(app); //get firebase data using getAuth
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      dispatch({
        type: LOG_OUT,
      });
      sessionStorage.removeItem("clone-access-token");
      sessionStorage.removeItem("clone-user");
    })
    .catch((error) => {
      // An error happened.
      const errorMessage = error.message;
      dispatch({
        type: LOG_OUT_FAIL,
        payload: errorMessage,
      });
    });
};
