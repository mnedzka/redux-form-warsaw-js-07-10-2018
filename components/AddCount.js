import { connect } from 'react-redux';

import { addCount } from 'actions/clock';

class AddCount extends React.Component {
  add = () => {
    this.props.addCount();
  }

  render() {
    const { count } = this.props;
    return (
      <div>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
      `}</style>
        <h1>AddCount: <span>{count}</span></h1>
        <button onClick={this.add}>Add To Count</button>
      </div>
    );
  }
}

export default connect(({ clock }) => ({ count: clock.count }), {
  addCount,
})(AddCount);
