import firebase from "../firebase";

export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const API_CALL_FAIL = "API_CALL_FAIL";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const register = (email, password) => async dispatch => {
  try {
    // dispatch({ type: BEGIN_API_CALL });
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().onAuthStateChanged(user => {
          console.log(user);
          if (user) {
            dispatch({ type: REGISTER_SUCCESS });
            console.log("Registration Successful");
          } else {
            dispatch({ type: REGISTER_FAIL });
          }
        });
      })
      .catch(() => {
        // dispatch({ type: API_CALL_FAIL });
        dispatch({ type: REGISTER_FAIL });
      });
  } catch (error) {
    // dispatch({ type: API_CALL_FAIL });
    dispatch({ type: REGISTER_FAIL });
  }
};

export const login = (email, password) => async dispatch => {
  try {
    // dispatch({ type: BEGIN_API_CALL });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        console.log(data);
        console.log("Login Successful");
      })
      .catch(() => {
        // dispatch({ type: API_CALL_FAIL });
        dispatch({ type: LOGIN_FAIL });
      });
  } catch (error) {
    // dispatch({ type: API_CALL_FAIL });
    dispatch({ type: LOGIN_FAIL });
  }
};
