import React, {useState} from 'react';
import {connect} from "react-redux";
import {addMessageRequest} from "../../actions/actionCreators";
import styles from './MessageArea.module.css'

function MessageArea (props) {
    const {currentChat, addMessageRequest, user} = props;
    const [value, setValue] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        const newMessage = {
            body: value,
            author: user._id,
            chatId: currentChat._id,
        }
        addMessageRequest(newMessage);
    };
    const changeHandler = ({target: {value}}) => {
        setValue(value);
    };

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler}>
                <textarea name={'message'} className={styles['text-area']} value={value} onChange={changeHandler}/>
                <button type={'submit'} className={styles.btn}></button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    addMessageRequest
}
const mapStateToProps = ({currentChat, user}) => ({currentChat, user});

export default connect(mapStateToProps, mapDispatchToProps)(MessageArea);