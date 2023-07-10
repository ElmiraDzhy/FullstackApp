import React from 'react';
import styles from './Chat.module.css';
import {connect} from 'react-redux';

function Chat (props) {
    const {currentChat} = props;
    return (
        <div className={styles['chat-container']}>
            {currentChat && currentChat.messages.map(m => <li>{m.body}</li> )}
        </div>
    )
}
const mapStateToProps =({currentChat}) => currentChat;
export default connect(mapStateToProps)(Chat);