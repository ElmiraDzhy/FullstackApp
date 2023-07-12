import React, {useState} from "react";
import styles from './UserMenuModal.module.css'
function ModalWindow (props) {
    const [editMode, setMode] = useState(false);
    const closeHandler = (e) => {
        if(e.currentTarget === e.target){
            props.close();
        }
    }

    const editHandler = () => {
        setMode(!editMode)
    }
    return (
        <div className={styles.background} onClick={closeHandler}>
            <div className={styles['modal-container']}>
                <button onClick={closeHandler}>x</button>
                {props.children([editMode, setMode])}
            </div>
        </div>
    )
}

export default ModalWindow