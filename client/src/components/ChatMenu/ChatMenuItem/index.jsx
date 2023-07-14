import React from "react";
import styles from './ChatMenuItem.module.css'

const ChatMenuItem = (props) => {
    const {member} = props
    return (
        <li>
            <div className={styles['container']}>
                <p className={styles['member-name']}>{member.firstName}</p>
                <img className={styles['member-image']} src={member?.imagePath} alt={''}/>
            </div>
        </li>
    )
}

export default ChatMenuItem