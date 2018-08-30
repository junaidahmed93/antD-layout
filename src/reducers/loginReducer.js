import CONSTANTS from '../constants/actionConstants';

const initialState = {
  user: {},
  isLoggedIn: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.LOGIN:
    {
      return Object.assign({}, state, {
        isLoggedIn: true,
      });
    }


    // case CONSTANTS.LOGIN_FAIL:
    //     return Object.assign({}, state, {
    //         error: action.error,
    //         user: {},
    //     });
    default:
      return state;
  }
};
export default loginReducer;
