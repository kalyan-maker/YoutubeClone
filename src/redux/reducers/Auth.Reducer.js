import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../ActionType";

const initialstate = {
  accesstoken: null,
  user: null,
  loading: false,
};

export const AuthReducer = (prevState = initialstate, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST: //if login request return to prevstate and loading is true
      return {
        ...prevState,
        loading: true,
      };

    case LOGIN_SUCCESS: //if login success return to prevstate and accesstoken is payload  loading is flase
      return {
        ...prevState,
        accessToken: payload,
        loading: false,
      };
    case LOGIN_FAIL: //if login fail return to prevstate and accesstoken is null  loading is flase and place error
      return {
        ...prevState,
        accessToken: null,
        loading: false,
        error: payload,
      };
    case LOAD_PROFILE: //if login profil return to prevstate and user is payload
      return {
        ...prevState,
        user: payload,
      };
    default:
      //if any of the cas does not match return prevState
      return prevState;
  }
};
