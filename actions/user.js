import API from "utils/api";

export const getUserByToken = ({ token }) => async () => {
  const [user] = await API.user.getByToken({ token });

  return user;
}