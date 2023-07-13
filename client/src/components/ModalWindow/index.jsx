import React, {useState} from "react";
import styles from './ModalWindow.module.css'
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
                <div className={styles['modal-data']}>
                {props.children([editMode, setMode])}
                </div>
                </div>
        </div>
    )
}

export default ModalWindow