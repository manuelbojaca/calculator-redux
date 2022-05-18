import { connect } from "react-redux";

const Counter = ({ count }) => {
  return <h2>{count}</h2>;
};

const mapStateToProps = ({ count }) => {
  return { count };
};

export default connect(mapStateToProps)(Counter);
