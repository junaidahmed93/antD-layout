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


        case CONSTANTS.LOG_OUT:
            return Object.assign({}, state, {
                isLoggedIn: false,
            });
        default:
            return state;
    }
};
export default loginReducer;
