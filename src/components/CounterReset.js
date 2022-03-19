import React from 'react'
import { counterReset } from "../redux/actions/counterActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


const CounterReset = (props) => {
  return (
    <React.Fragment>
      <button style={{height:"30px", width:"50px", margin:"10px"}} onClick={()=>props.dispatch(counterReset())}><b>RES</b></button>
    </React.Fragment>
  )
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(counterReset, dispatch) };
};

export default connect(mapDispatchToProps)(CounterReset);
