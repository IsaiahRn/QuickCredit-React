const initialState = {
  isAuthenticated: false,
  user: {},
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null,
  loading: null,
  userSignup: {
    signUpSubmitting: '',
    signUpSuccess: '',
    signUpfailure: '',
  },
  home: '',
  login: {
    user: {},
  },
};

export default initialState;
