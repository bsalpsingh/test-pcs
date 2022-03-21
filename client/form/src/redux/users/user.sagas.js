import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";
import { signInWithGoogle } from "./../../firebase/firebase.util";
import { auth, getCurrentUser } from "./../../firebase/firebase.util";
import userActionTypes from "./user.types";
import {
  googleSignInSuccess,
  googleSignInFailure,
  emailSignInSuccess,
  emailSignInFailure,
  emailSignUpSuccess,
  emailSignUpFailure,
  googleSignOutSuccess,
  googleSignOutFailure,
  passwordResetSuccess,
  passwordResetFailure,
} from "./user.actions";

import { getUserCartStart } from "./../cart/cart.actions";

let axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    // "CSRF-Token": cookies.get("XSRF-TOKEN"),
  },
  withCredentials: true,
};

export function* loginApiCall(idToken) {
  const { data } = yield axios.post(
    `/api/v1/user/signIn`,

    { idToken },
    axiosConfig
  );

  return data;
}

// email sign up saga

export function* emailSignUpStartSaga({ payload: { email, password, name } }) {
  try {
    //todo make an api call to store the signed up users
    const { data } = yield axios.post(
      `/api/v1/user/emailSignUp`,
      { name, email },
      axiosConfig
    );

    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    console.log(user);
    yield user.sendEmailVerification();

    // destruct data and send with success action
    console.log("email signuP data", data);
    yield put(emailSignUpSuccess(data));
  } catch (error) {
    yield put(emailSignUpFailure(error));
  }
}

export function* emailSignUpStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGNUP_START, emailSignUpStartSaga);
}

// google sign in saga

export function* googleSignInStartSaga() {
  try {
    const { user } = yield signInWithGoogle();
    const idToken = yield user.getIdToken();
    console.log("user data and token", user, idToken);

    //todo write backend Authentication to update user in store
    const { data } = yield loginApiCall(idToken);
    yield put(googleSignInSuccess(data));
    yield put(getUserCartStart());
  } catch (error) {
    yield put(
      googleSignInFailure({ messsage: "Login failed. Try again later" })
    );
  }
}

export function* googleLoginSaga() {
  yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, googleSignInStartSaga);
}

//email sign in saga

export function* emailSignInStartSaga({ payload: { email, password } }) {
  try {
    yield auth.signInWithEmailAndPassword(email, password);
    const user = yield getCurrentUser();

    if (user.emailVerified) {
      const idToken = yield user.getIdToken();
      console.log(idToken);
      // todo an api call to login user in backend
      const { data } = yield axios.post(
        `/api/v1/user/emailSignIn`,
        { idToken },
        axiosConfig
      );
      yield put(emailSignInSuccess(data.data));
      yield put(getUserCartStart());
    } else {
      user.sendEmailVerification();
      yield put(
        emailSignInFailure({
          message: "Account not verified..please check inbox",
        })
      );
    }
  } catch (error) {
    yield put(
      emailSignInFailure({
        message: "Login failed. Try again later",
      })
    );
  }
}

export function* emailSignInsaga() {
  yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, emailSignInStartSaga);
}

//signout saga

export function* googleSignOut() {
  try {
    yield axios.get(
      `/api/v1/user/signOut`,

      axiosConfig
    );
    yield auth.signOut();
    yield put(googleSignOutSuccess());
  } catch (error) {
    yield put(googleSignOutFailure(error));
  }
}

export function* googleLogoutSaga() {
  yield takeLatest(userActionTypes.GOOGLE_SIGNOUT_START, googleSignOut);
}

// password reset saga
export function* passwordResetStartSaga({ payload: { email } }) {
  try {
    yield auth.sendPasswordResetEmail(email);
    yield put(passwordResetSuccess());
  } catch (error) {
    yield put(passwordResetFailure(error));
  }
}

export function* passwordResetSaga() {
  yield takeLatest(
    userActionTypes.RESET_PASSWORD_START,
    passwordResetStartSaga
  );
}

export default function* userSagas() {
  yield all([
    call(googleLoginSaga),
    call(emailSignInsaga),
    call(googleLogoutSaga),
    call(emailSignUpStart),
    call(passwordResetSaga),
  ]);
}
