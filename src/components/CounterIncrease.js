import React from "react";
import { bindActionCreators } from "redux";
import { counterIncrease } from "../redux/actions/counterActions";
import { connect } from "react-redux";

const CounterIncrease = (props) => {
  return (
    <React.Fragment>
      <button style={{height:"30px", width:"50px", margin:"10px"}} onClick={() => props.dispatch(counterIncrease())}><b>INC</b></button>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(counterIncrease, dispatch) };
};
export default connect(mapDispatchToProps)(CounterIncrease);
