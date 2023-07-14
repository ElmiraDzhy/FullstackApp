import React from 'react';
import styles from './Chat.module.css';
import {connect} from 'react-redux';
import ChatItem from "./ChatItem/index";
import {deleteMessageRequest} from "../../actions/actionCreators";
function Chat (props) {
    const {currentChat} = props;


    const deleteMessageHandler = (messageId) => {
        props.deleteMessageRequest(messageId)
    }

    return (
        <div className={styles['chat-container']}>
            {currentChat && currentChat.messages.map(m => <ChatItem message={m} key={m._id} delete={deleteMessageHandler}/> )}
        </div>
    )
}
const mapStateToProps =({currentChat}) => ({currentChat});
export default connect(mapStateToProps, {deleteMessageRequest})(Chat);