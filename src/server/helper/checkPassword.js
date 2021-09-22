const checkValidPassword = (string) => {
  const testCheck = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return testCheck.test(string);
};

module.exports = checkValidPassword;
