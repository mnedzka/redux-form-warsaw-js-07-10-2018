import { PureComponent } from 'react';
import { withAuth } from "components";
import DashboardLayouts from "../layouts/Dashboard";

class Dashboard extends PureComponent {
  render() {
    return (
      <DashboardLayouts user={this.props.user} />
    )
  }
}

Dashboard = withAuth()(Dashboard);

export default Dashboard;