const serverUrl = "http://localhost:8080";
const authLinks = `${serverUrl}/api/auth`;
const urlCheckVerify = (id, token) => {
  return `${authLinks}/verify?id=${id}&token=${token}`;
};
const registerUrl = `${serverUrl}/api/auth/register`;
const urlGetInforUser = (id) => {
  return `${serverUrl}/api/user/info/${id}`;
};
const urlGetUserForgetPassword = (email) =>
  `${serverUrl}/api/user/reset/${email}`;
const loginUrl = `${serverUrl}/api/auth/login`;
export {
  urlCheckVerify,
  registerUrl,
  urlGetInforUser,
  loginUrl,
  urlGetUserForgetPassword,
};
