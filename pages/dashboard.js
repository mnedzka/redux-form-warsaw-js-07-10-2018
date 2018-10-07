import { PureComponent } from 'react';
import cookieStorage from "utils/cookieStorage";

class Dashboard extends PureComponent {
  static async getInitialProps({ req, res, isServer }) {
    let token;
    if (isServer) {
      const { cookies } = req;
      token = cookieStorage.getWithPrefix(cookies, "token");
    } else {
      token = cookieStorage.get("token");
    }
    console.log(token);
  }

  render() {
    return <p> this is dashboard page</p >
  }
}

export default Dashboard;