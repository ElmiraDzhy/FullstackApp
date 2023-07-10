import React, {useEffect, useState} from 'react';
import { getCurrentChatRequest} from "../../actions/actionCreators";
import styles from './DialogList.module.css'
import {connect} from "react-redux";
import cx from 'classnames'
function DialogList (props) {
const {chatList,  getCurrentChatRequest} = props;



    const changeCurrentChat = (chatId) => {
        console.log(`chatId: ${chatId}`)
        //generate action for changing currentChat
        getCurrentChatRequest(chatId)
    }

    const mapList = (chat) => {
        const cn = cx(styles['dialog-item'], {
            [styles['current-dialog']]: chat._id === props.currentChat?._id
        })
        return (<li className={cn} key={chat._id} onClick={() => {
            changeCurrentChat(chat._id)
        }}>{chat.name}</li>)
    }

    return (
        <div className={styles.container}>
            <ul>
                {chatList && chatList.map(mapList)}
            </ul>
        </div>
    )
}
const mapStateToProps = ({chatList, currentChat}) => ({chatList, currentChat});

const mapDispatchToProps = {

    getCurrentChatRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogList);