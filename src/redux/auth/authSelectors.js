export const isLogin = state => state.auth.isLogin;
export const getUser = state => state.auth.user;
export const getLoadingUserStatus = ({ auth }) => auth.isLoadingUser;
