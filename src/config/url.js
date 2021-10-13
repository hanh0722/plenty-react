const serverUrl = "http://localhost:8080";
const authLinks = `${serverUrl}/api/auth`;
const userApi = `${serverUrl}/api/user`
const urlCheckVerify = (id, token) => {
  return `${authLinks}/verify?id=${id}&token=${token}`;
};
const registerUrl = `${authLinks}/register`;
const urlGetInforUser = (id) => {
  return `${userApi}/info/${id}`;
};
const urlGetUserForgetPassword = (email) =>
  `${userApi}/reset/${email}`;
const loginUrl = `${authLinks}/login`;
const resetPasswordUrl = `${userApi}/reset`;
const checkResetPasswordUrl = (token, uidt) => `${userApi}/reset-password/${token}?${uidt}`;
const changePasswordFromUser = `${userApi}/reset-password`;
const getUserByToken = token => `${userApi}/validate/:token`;
export {
  urlCheckVerify,
  registerUrl,
  urlGetInforUser,
  loginUrl,
  urlGetUserForgetPassword,
  resetPasswordUrl,
  checkResetPasswordUrl,
  changePasswordFromUser,
  getUserByToken
};
