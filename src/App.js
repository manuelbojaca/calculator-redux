import "./App.css";
import { connect } from "react-redux";
import Counter from "./components/Counter";
import Button from "./components/Button";
import { MULTIPLY, DIVIDE, INCREMENT, DECREMENT } from "./store";
import Input from "./components/Input";

function App({ multiply, divide, increment, decrement }) {
  return (
    <div>
      <Input></Input>
      <Counter></Counter>
      <Button event={multiply}>Multiply</Button>
      <Button event={divide}>Divide</Button>
      <Button event={increment}>Increment</Button>
      <Button event={decrement}>Decrement</Button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    multiply: () => dispatch({ type: MULTIPLY }),
    divide: () => dispatch({ type: DIVIDE }),
    increment: () => dispatch({ type: INCREMENT }),
    decrement: () => dispatch({ type: DECREMENT }),
  };
}

export default connect(null, mapDispatchToProps)(App);
