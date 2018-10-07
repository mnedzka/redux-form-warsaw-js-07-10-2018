import API from 'utils/api';

export const signup= ({email, password}) => async(dispatch) => {
  const user =  await API.auth.register({email, password});
    console.log(user)
}