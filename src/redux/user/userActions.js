export const loginAction = (username) => {
    return {
        type: "USER_LOGIN",
        payload: username,
    };
};
export const logoutAction = () => {
    return {
        type: "USER_LOGOUT",
    };
};
