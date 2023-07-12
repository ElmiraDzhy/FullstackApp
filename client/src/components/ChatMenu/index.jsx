import React, {useState} from "react";
import styles from './ChatMenu.module.css'
import {connect} from "react-redux";
import ModalWindow from "../ModalWindow";
import CONSTANTS from "../../constants";
const ChatMenu = (props) => {
    const {currentChat} = props;
    const [modalOpen, setModalOpen] = useState(false);
    const imagePlaceholder = currentChat.imagePath || CONSTANTS.CHAT_PLACEHOLDER;

    return (
        <div className={styles['menu-container']} onClick={() => setModalOpen(!modalOpen)}>
            {currentChat &&
                <>
                    <img className={styles['chat-img']} alt={''} src={imagePlaceholder}/>
                    <p>{currentChat.name}</p>
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
                                        {currentChat.members.map(m => <li>{m}</li>)}
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