import React from "react";
import styles from './ChatItem.module.css';
import cx from "classnames";
import {connect} from 'react-redux';
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';
function ChatItem (props) {

    const {message, message: {body, imagePath}, user, deleteMessageRequest} = props;

    const cn = cx(styles.message, {
        [styles['author-message']] : user._id === message.author
    });



return (

    <div className={cn}>
        {imagePath &&  <img className={styles.image} src={imagePath} alt={''}/>}
        <p>{body}</p>


        <button className={styles.deletebtn} onClick={() => props.delete(message._id)}>
            <Icon path={mdiDelete} size={1}   color="blue"/></button>
    </div>


)
}
const mapStateToProps = ({user}) => ({user});
export default connect(mapStateToProps)(ChatItem);