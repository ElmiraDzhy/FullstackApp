import React, {useEffect, useState} from 'react';
import { getCurrentChatRequest} from "../../actions/actionCreators";
import {useNavigate} from "react-router-dom";
import styles from './DialogList.module.css'
import {connect} from "react-redux";
function DialogList (props) {
const {chatList,  getCurrentChatRequest} = props;
    const navigate = useNavigate();


    const changeCurrentChat = (chatId) => {
        //generate action for changing currentChat
        getCurrentChatRequest(chatId)
    }

    const mapList = (chat) => <li key={chat._id} onClick={() => {changeCurrentChat(chat._id)}}>{chat.name}</li> ;


    return (
        <div className={styles.container}>
            <ul>

                {chatList && chatList.map(mapList)}
            </ul>
        </div>
    )
}
const mapStateToProps = ({chatList}) => chatList;

const mapDispatchToProps = {

    getCurrentChatRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogList);