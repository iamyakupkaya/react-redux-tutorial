import React from 'react'
import { bindActionCreators } from "redux";
import { counterDecrease } from "../redux/actions/counterActions";
import { connect } from "react-redux";

const CounterDecrease = (props) => {
  return (
    <React.Fragment>
      <button style={{height:"30px", width:"50px", margin:"10px"}} onClick={()=>props.dispatch(counterDecrease())}><b>DEC</b></button>
    </React.Fragment>
  )
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(counterDecrease, dispatch) };
};

export default connect(mapDispatchToProps)(CounterDecrease);