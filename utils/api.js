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
    })
  }
}