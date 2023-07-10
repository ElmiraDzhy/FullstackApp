import React from 'react';
import styles from './Chat.module.css';
import {connect} from 'react-redux';
import ChatItem from "./ChatItem";
function Chat (props) {
    const {currentChat} = props;
    console.log(`currentChat: ${currentChat}`)
    return (
        <div className={styles['chat-container']}>
            {currentChat && currentChat.messages.map(m => <ChatItem message={m} key={m._id}/> )}
        </div>
    )
}
const mapStateToProps =({currentChat}) => ({currentChat});
export default connect(mapStateToProps)(Chat);