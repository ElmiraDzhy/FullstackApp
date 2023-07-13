import React from "react";
import styles from './ChatItem.module.css';
import cx from "classnames";
import {connect} from 'react-redux';
function ChatItem (props) {

    const {message, message: {body, imagePath}, user} = props;

    const cn = cx(styles.message, {
        [styles['author-message']] : user._id === message.author
    });

    const imageMode =
       ( <div className={cn}>
           <p>{body}</p>
           <img src={imagePath} style={{width: "50px", height: "50px"}} alt={''}/>
        </div>)

        const NONimageMode =
       ( <div className={cn}>
           <p>{body}</p>
        </div>)



return (

        imagePath ? imageMode : NONimageMode

)
}
const mapStateToProps = ({user}) => ({user});
export default connect(mapStateToProps)(ChatItem);