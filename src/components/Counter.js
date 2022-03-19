import React from 'react'
import {connect} from 'react-redux';

const Counter = (props) => {
    console.log("yaz",props);
  return (
    <React.Fragment>
        <h1>{props.counter}</h1>
    </React.Fragment>
  )
}

function mapStateToProps(state){
    return {counter:state.counterReducer}
}

export default connect(mapStateToProps)(Counter);
