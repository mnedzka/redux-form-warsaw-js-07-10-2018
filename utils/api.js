import net from "./net"

export default {
  auth: {
    register: ({email, password}) => net.post({
      url: "url",
      data: {
        email,
        password,
        token: Math.random().toString(36).substring(7),
      }
    })
  }
}