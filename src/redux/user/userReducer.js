export const userReducer = (userState = null, action) => {
    switch (action.type) {
        case "USER_LOGIN": {
            userState = action.payload;
            return userState;
        }
        case "USER_LOGOUT": {
            userState = null;
            return userState;
        }
        default: {
            return userState;
        }
    }
};
