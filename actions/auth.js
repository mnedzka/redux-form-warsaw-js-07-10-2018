import API from 'utils/api';
import cookieStorage from "utils/cookieStorage";

export const signup = ({ email, password }) => async (dispatch) => {
  const user = await API.auth.register({ email, password });
  cookieStorage.set("token", user.token)
  console.log(user)
}

export const signin = ({ email, password }) => async (dispatch) => {
  const [user] = await API.auth.login({ email, password });
  if (user) {
    cookieStorage.set("token", user.token)
  }
  console.log(user)
}