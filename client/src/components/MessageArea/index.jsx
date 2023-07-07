import React, {useState} from 'react';
import {connect} from "react-redux";
import {addMessageRequest} from "../../actions/actionCreators";
import styles from './MessageArea.module.css'

function MessageArea (props) {
    const {currentChat, addMessage} = props;
    const [value, setValue] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        const newMessage = {
            body: value,
            chatId: currentChat.id
        }
        addMessageRequest(newMessage);
    };
    const changeHandler = ({target: value}) => setValue(value);

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler}>
                <textarea name={'message'} value={value} onChange={changeHandler}/>
                <button type={'submit'}></button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    addMessage
}
const mapStateToProps = ({currentChat}) => ({currentChat});

export default connect(mapStateToProps, mapDispatchToProps)(MessageArea);