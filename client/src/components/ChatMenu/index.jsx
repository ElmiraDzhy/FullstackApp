import React, {useState} from "react";
import styles from './ChatMenu.module.css'
import {connect} from "react-redux";
import ModalWindow from "../ModalWindow";
import CONSTANTS from "../../constants";
import ChatMenuItem from "./ChatMenuItem";
const ChatMenu = (props) => {
    const {currentChat} = props;
    const [modalOpen, setModalOpen] = useState(false);
    const imagePlaceholder = currentChat?.imagePath || CONSTANTS.CHAT_PLACEHOLDER;

    return (
        <div className={styles['menu-container']} onClick={() => currentChat && setModalOpen(!modalOpen)}>
            {currentChat &&
                <>
                    <p>{currentChat.name}</p>
                    <img className={styles['chat-img']} alt={''} src={imagePlaceholder}/>
                </>}
            {
                modalOpen && <ModalWindow close={() => setModalOpen(!modalOpen)}>
                    {
                        ([editMode, setMode]) => {
                            return (
                                <>
                                    <img className={styles['chat-img']} alt={''} src={imagePlaceholder}/>
                                    <p>{currentChat.name}</p>
                                    <ul>
                                        {currentChat.members.map(m => <ChatMenuItem member={m}/>)}
                                    </ul>
                                </>
                            )
                        }
                    }
                </ModalWindow>
            }
        </div>
    )
}
const mapStateToProps = ({currentChat}) => ({currentChat});
export default connect(mapStateToProps, {})(ChatMenu);