import classes from "./Counter.module.css";
import { useDispatch, useSelector, connect } from "react-redux";
import { counterActions } from "../store/counter/counter";
import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {
    this.props.toggle();
  }

  render() {
    const canToggle = this.props.counter.showCounter;

    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {canToggle && (
          <div className={classes.value}>{this.props.counter.counter}</div>
        )}
        <div>
          <button onClick={this.incrementHandler.bind(this)}>
            Increment By 1
          </button>
          <button onClick={this.decrementHandler.bind(this)}>
            Decrement By 1
          </button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>
          Toggle Counter
        </button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    authentication: state.authentication,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(counterActions.increment()),
    decrement: () => dispatch(counterActions.decrement()),
    toggle: () => dispatch(counterActions.toggleCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
