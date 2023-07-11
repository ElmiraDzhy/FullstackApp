import React, {useRef, useState} from 'react';
import { getCurrentChatRequest, createNewChatRequest} from "../../actions/actionCreators";
import styles from './DialogList.module.css'
import {connect} from "react-redux";
import cx from 'classnames'
import UserMenuModal from "../UserMenu/UserMenuModal";
function DialogList (props) {
    const {chatList,  getCurrentChatRequest, createNewChatRequest, user} = props;
    const [modalOpen, setModalOpen] = useState(false);
    const newChatName = useRef(null)
    const changeCurrentChat = (chatId) => {
        //generate action for changing currentChat
        getCurrentChatRequest(chatId);
    }

    const mapList = (chat) => {
        const cn = cx(styles['dialog-item'], {
            [styles['current-dialog']]: chat._id === props.currentChat?._id
        })
        return (
            <li className={cn} key={chat._id} onClick={() => {changeCurrentChat(chat._id)}}>
                {chat.name}
            </li>);
    }

    const addNewChat = (e) => {
        createNewChatRequest({name: newChatName.current.value, members: [`${user._id}`]});
        setModalOpen(!modalOpen);
    }

    return (
        <div className={styles.container}>
            <ul>
                {chatList && chatList.map(mapList)}
            </ul>
            <button onClick={()=>{setModalOpen(!modalOpen)}}>+</button>
            {modalOpen && <UserMenuModal close={() => setModalOpen(!modalOpen)}>
                {
                    () => {
                        return (
                            <div className={styles['modal-container']}>
                                <p>Input your chat name *</p>
                                <input type={'text'} name={'name'} placeholder={'My lovely chat'} ref={newChatName}/>
                                <button onClick={addNewChat}>Create</button>
                            </div>
                        )}
                }
            </UserMenuModal>}
        </div>
    )
}
const mapStateToProps = ({chatList, currentChat, user}) => ({chatList, currentChat, user});

const mapDispatchToProps = {
    getCurrentChatRequest,
    createNewChatRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogList);