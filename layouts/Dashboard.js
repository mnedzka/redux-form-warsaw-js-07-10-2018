import { Fragment, PureComponent } from 'react';
import { connect } from "react-redux";
import { withRouter } from "next/router";
import { SystemNotifications } from "components";

import { fetchAll } from "actions/questions";
import { randomQuestionsSelector } from "../selectors";

class Dashboard extends PureComponent {
  constructor(props) {
    super(props);

    const { user } = this.props;

    if (!user.id) {
      this.props.router.push("/signin");
    } else {
      this.props.fetchAll();
    }
  }

  render() {
    const { user, children, questions } = this.props;
    return (
      <Fragment>
        <header>Hello {user.email}</header>
        <main>{children}</main>

        <div>
          <section>
            "Buttony do filtrowania"
          </section>
          <section>
            <ul>
              {questions.map(question => {
                return <li key={question.id}>{question.question}</li>
              })}
            </ul>
          </section>
        </div>


        <SystemNotifications />
      </Fragment>
    )
  }
}

Dashboard = withRouter(Dashboard);
Dashboard = connect(state => ({
  questions: randomQuestionsSelector(state)
}), {
    fetchAll,
  })(Dashboard)

export default Dashboard;