import userActionTypes from "./user.types";

const initialState = {
  // signing in user with google
  //userFetching,userData,userFetchingError
  userFetching: false,
  userData: null,
  userFetchingError: undefined,

  // email signin

  signingInwithEmail: false,
  signedInWithEmail: false,
  signInWithEmailError: undefined,

  // email signUp
  // signingUp,signedUp,signUpError
  signingUp: false,
  signedUp: false,
  signUpError: undefined,

  //signing out user
  // userSigningOutStart,userLoggedInStatus,userSingOutError
  userSigningOutStart: false,
  userLoggedInStatus: true,
  userSignOutError: undefined,

  // password reset
  //passwordResetInProcess,passwordReset,passwordResetError
  passwordResetInProcess: false,
  passwordReset: false,
  passwordResetError: undefined,
  // set delivery location

  deliveryLocation: {
    latitude: 83.44475352739364,
    longitude: 27.50664979964404,
    error: null,
  },

  // admin socket
  adminSocket: null,
  // deliveryLocationForm,deliveryLocation
  deliveryLocationForm: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // google sign in
    case userActionTypes.GOOGLE_SIGNIN_START:
    case userActionTypes.EMAIL_SIGNIN_START:
      return {
        ...state,
        userFetching: true,
        userData: null,
        userFetchingError: undefined,
      };
    case userActionTypes.GOOGLE_SIGNIN_SUCCESS:
    case userActionTypes.EMAIL_SIGNIN_SUCCESS:
      return {
        ...state,
        userFetching: false,
        userData: action.payload,
        userFetchingError: undefined,
      };

    case userActionTypes.GOOGLE_SIGNIN_FAILURE:
    case userActionTypes.EMAIL_SIGNIN_FAILURE:
      return {
        ...state,
        userData: null,
        userFetching: false,
        userFetchingError: action.payload,
      };

    // firebase email sign up

    case userActionTypes.EMAIL_SIGNUP_START:
      return {
        ...state,
        signingUp: true,
        signedUp: false,
        signUpError: undefined,
      };

    case userActionTypes.EMAIL_SIGNUP_SUCCESS:
      return {
        ...state,
        signingUp: false,
        signedUp: true,
        signUpError: undefined,
      };

    case userActionTypes.EMAIL_SIGNUP_FAILURE:
      return {
        ...state,
        signingUp: false,
        signedUp: false,
        signUpError: action.payload,
      };

    // firebase sign out
    case userActionTypes.GOOGLE_SIGNOUT_START:
      return {
        ...state,
        userSigningOutStart: true,
      };

    case userActionTypes.GOOGLE_SIGNOUT_SUCCESS:
    case userActionTypes.CLEAR_USER_STATE:
      return initialState;

    case userActionTypes.GOOGLE_SIGNOUT_FAILURE:
      return {
        ...state,
        userSignOutError: action.payload,
        userLoggedInStatus: true,
        userSigningOutStart: false,
      };

    case userActionTypes.RESET_PASSWORD_START:
      return {
        ...state,
        passwordResetInProcess: true,
        passwordReset: false,
        passwordResetError: undefined,
      };

    case userActionTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        passwordResetInProcess: false,
        passwordReset: true,
        passwordResetError: undefined,
      };

    case userActionTypes.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        passwordResetInProcess: false,
        passwordReset: false,
        passwordResetError: action.payload,
      };

    // setting delivery loaction
    case userActionTypes.SET_DELIVERY_LOCATION:
      return { ...state, deliveryLocation: action.payload };

    case userActionTypes.SET_DELIVERY_LOCATION_FORM:
      return {
        ...state,
        deliveryLocationForm: action.payload,
      };

    case userActionTypes.SET_ADMIN_SOCKET:
      return {
        ...state,
        adminSocket: action.payload,
      };
    // clean up functions go here

    default:
      return state;
  }
};
export default userReducer;
