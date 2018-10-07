import net from "./net"

export default {
  auth: {
    register: ({ email, password }) => net.post({
      url: "users",
      data: {
        email,
        password,
        token: Math.random().toString(36).substring(7),
      }
    }),
    login: ({ email, password }) => net.get({
      url: "users",
      data: {
        email,
        password,
        _limit: 1
      }
    })
  },
  user: {
    getByToken: ({ token }) => net.get({
      url: "users",
      data: {
        token,
        _limit: 1
      }
    })
  }
}