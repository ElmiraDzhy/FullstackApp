import React from "react";
import styles from './ChatItem.module.css';
import cx from "classnames";
import {connect} from 'react-redux';
function ChatItem (props) {
    const {message, message: {body}, user} = props;
    const cn = cx(styles.message, {
        [styles['author-message']] : user._id === message.author
    });
return (
    <div className={cn}>{body}</div>
)
}
const mapStateToProps = ({user}) => ({user});
export default connect(mapStateToProps)(ChatItem);