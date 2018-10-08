import { Component } from "react";
import cookieStorage from "utils/cookieStorage";
import { getUserByToken } from 'actions/user';

export default () => ComposedComponent => {
  return class withAuth extends Component {
    static async getInitialProps(context) {
      const composedInitialProps = ComposedComponent.getInitialProps
        ? await ComposedComponent.getInitialProps(context)
        : {};
      const { req, res, isServer, store } = context;
      let token;

      if (isServer) {
        const { cookies } = req;
        token = cookieStorage.getWithPrefix(cookies, "token");
      } else {
        token = cookieStorage.get("token");
      }
      const user = await store.dispatch(getUserByToken({ token }))
      console.log(token);

      return { ...composedInitialProps, user };
    }

    static defaultProps = {
      user: {}
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }
}