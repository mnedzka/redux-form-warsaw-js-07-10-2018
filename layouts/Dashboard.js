import { Fragment, PureComponent } from 'react';
import { withRouter } from "next/router";

class Dashboard extends PureComponent {
  constructor(props) {
    super(props);

    const { user } = this.props;

    if (!user.id) {
      this.props.router.push("/signin");
    }
  }

  render() {
    const { user, children } = this.props;
    return (
      <Fragment>
        <header>Hello {user.email}</header>
        <main>{children}</main>
      </Fragment>
    )
  }
}

Dashboard = withRouter(Dashboard);

export default Dashboard;