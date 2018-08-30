import CONSTANTS from '../constants/actionConstants';

export function requestInitiate() {
  const action = {
    type: CONSTANTS.REQUEST_INITIATE,
  };
  return action;
}
export function requestLogInUser() {
  const action = {
    type: CONSTANTS.LOGIN,
  };
  return action;
}

export function LogoutRequestUser(){
    const action = {
        type: CONSTANTS.LOG_OUT,
      };
      return action;
}
export function loginSuccess(user) {
  const action = {
    type: CONSTANTS.LOGIN_SUCCESS,
    user: Object.assign({}, user, {
      isLoggedIn: true,
    }),
  };
  return action;
}
export function loginFail(error) {
  const action = {
    type: CONSTANTS.LOGIN_FAIL,
    error,
  };
  return action;
}

export function LoginRequest() {
  return (dispatch) => {
    // setTimeout(()=>{
    dispatch(requestLogInUser());
    // },5000)
  };
}

export function LogoutRequest() {
    return (dispatch) => {
      dispatch(requestLogInUser());
    };
  }
  