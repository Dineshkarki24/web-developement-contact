import React, { Suspense } from "react";
import { connect } from "react-redux";
import { setCounter } from "./counter.action";

const OtherComponents = React.lazy(() => import("../OtherComponents"));
class Counter extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <h1>Your Counter is :{this.props.count}</h1>
        <button onClick={() => this.props.setCounter(this.props.count + 1)}>
          Increment
        </button>
        <Suspense fallback={<h1>Loading ....</h1>}>
          <OtherComponents />
        </Suspense>
      </>
    );
  }
}
const mapStateToProps = state => ({
  count: state.count.count
});
const mapDispatchToProps = dispatch => ({
  setCounter: count => dispatch(setCounter(count))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
