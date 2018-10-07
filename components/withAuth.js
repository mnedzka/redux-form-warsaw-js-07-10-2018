import { Component } from "react";
import cookieStorage from "utils/cookieStorage";
import { getUserByToken } from 'actions/user';

export default () => ComposedComponent => {
  return class withAuth extends Component {
    static async getInitialProps({ req, res, isServer, store }) {
      let token;

      if (isServer) {
        const { cookies } = req;
        token = cookieStorage.getWithPrefix(cookies, "token");
      } else {
        token = cookieStorage.get("token");
      }
      const user = await store.dispatch(getUserByToken({ token }))
      console.log(token);

      return { user };
    }

    static defaultProps = {
      user: {}
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }
}