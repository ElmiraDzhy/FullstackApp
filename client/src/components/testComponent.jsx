import React from 'react';
import {connect} from "react-redux";

const ACTION_TYPES = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    INPUT_CHANGE: 'INPUT_CHANGE',
}

const incrementActionCreator = () => ({type: ACTION_TYPES.INCREMENT});
const decrementActionCreator = () => ({type: ACTION_TYPES.DECREMENT});
const inputActionCreator = ({target: {value}}) => ({
    type: ACTION_TYPES.INPUT_CHANGE,
    payload: value
});

function TestComponent (props) {
    const {counter, inputValue, increment, decrement, changeStep} = props;

    return (
        <div>
            <h1>{counter}</h1>
            <input type={"range"} value={inputValue} onChange={changeStep}/>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => dispatch(incrementActionCreator()),
//         decrement: () => dispatch(decrementActionCreator()),
//         changeStep: ({target: {value}}) => dispatch(inputActionCreator(value)),
//     }
// }

const mapDispatchToProps = {
    increment: incrementActionCreator,
    decrement: decrementActionCreator,
    changeStep: inputActionCreator,
}
export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);