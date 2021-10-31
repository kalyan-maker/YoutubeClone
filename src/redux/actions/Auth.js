import { app } from "../../components/firebase"; //import app from firebase

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; //import custom auth from firesbase.auth
import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../ActionType";

export const login = () => async (dispatch) => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider(auth);
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      dispatch({
        type: LOGIN_REQUEST,
      });
      dispatch({
        type: LOGIN_SUCCESS,
        payload: accessToken,
      });
      dispatch({
        type: LOAD_PROFILE,
      });
    })
    .catch((error) => {
      // Handle Errors here.

      console.log(error.message);
      dispatch({
        type: LOGIN_FAIL,
        payload: error.message,
      });
      // ...
    });
};
