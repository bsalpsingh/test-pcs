import userActionTypes from "./user.types";

// google sign in

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGNIN_START,
});

export const googleSignInSuccess = (backEndUserData) => ({
  type: userActionTypes.GOOGLE_SIGNIN_SUCCESS,
  payload: backEndUserData,
});

export const googleSignInFailure = (error) => ({
  type: userActionTypes.GOOGLE_SIGNIN_FAILURE,
  payload: error,
});

// email Login
// emailSignInStart,emailSignInSuccess,emailSignInFailure
export const emailSignInStart = (emailLoginCredentials) => ({
  type: userActionTypes.EMAIL_SIGNIN_START,
  payload: emailLoginCredentials,
});

export const emailSignInSuccess = (userData) => ({
  type: userActionTypes.EMAIL_SIGNIN_SUCCESS,
  payload: userData,
});

export const emailSignInFailure = (error) => ({
  type: userActionTypes.EMAIL_SIGNIN_FAILURE,
  payload: error,
});

//firebase email sign Up
//emailSignUpSuccess,emailSignUpFailure
export const emailSignUpStart = (signUpDetails) => ({
  type: userActionTypes.EMAIL_SIGNUP_START,
  payload: signUpDetails,
});

export const emailSignUpSuccess = () => ({
  type: userActionTypes.EMAIL_SIGNUP_SUCCESS,
});

export const emailSignUpFailure = (error) => ({
  type: userActionTypes.EMAIL_SIGNUP_FAILURE,
  payload: error,
});

//firebase sign out

export const googleSignOutStart = () => ({
  type: userActionTypes.GOOGLE_SIGNOUT_START,
});
export const googleSignOutSuccess = () => ({
  type: userActionTypes.GOOGLE_SIGNOUT_SUCCESS,
});
export const googleSignOutFailure = (error) => ({
  type: userActionTypes.GOOGLE_SIGNOUT_FAILURE,
  payload: error,
});

//reset password
// passwordResetStart,passwordResetSuccess,passwordResetFailure
export const passwordResetStart = (emailCred) => ({
  type: userActionTypes.RESET_PASSWORD_START,
  payload: emailCred,
});

export const passwordResetSuccess = () => ({
  type: userActionTypes.RESET_PASSWORD_SUCCESS,
});

export const passwordResetFailure = (error) => ({
  type: userActionTypes.RESET_PASSWORD_FAILURE,
  payload: error,
});
//  set delivery loaction
// setDeliveryLocation
export const setDeliveryLocation = (locationObj) => ({
  type: userActionTypes.SET_DELIVERY_LOCATION,
  payload: locationObj,
});

export const setDeliveryLocationForm = (deliveryObj) => ({
  type: userActionTypes.SET_DELIVERY_LOCATION_FORM,
  payload: deliveryObj,
});

// set admin socket
// setAdminSocket
export const setAdminSocket=(socketObj)=>({
  type:userActionTypes.SET_ADMIN_SOCKET,
  payload:socketObj
})

// clean up functions
export const clearUserState = () => ({
  type: userActionTypes.CLEAR_USER_STATE,
});
