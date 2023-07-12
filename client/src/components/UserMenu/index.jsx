import React, {useState , useRef} from "react";
import {connect} from "react-redux";
import styles from './UserMenu.module.css'
import ModalWindow from "../ModalWindow";
import {updateUserRequest, logOut} from "../../actions/actionCreators";
import CONSTANTS from '../../constants';

function UserMenu (props) {
    const {user, updateUserRequest, logOut} = props;
    const [modalOpen, setOpen] = useState(false);
    const firstNameInputRef = useRef(null);
    const lastNameInputRef = useRef(null);

    const modalHandler = () => {
        setOpen(!modalOpen);
    }

    const submitData = () => {
        const firstName = firstNameInputRef.current.value;
        const lastName = lastNameInputRef.current.value;
        updateUserRequest({
            firstName,
            lastName
        });
    }
    const imagePlaceholder = user.imagePath || CONSTANTS.USER_PLACEHOLDER;
    return (
        <>
            <div className={styles['user-menu-container']} onClick={modalHandler}>
                <img src={user?.imagePath} className={styles.avatar} alt={''}/>
                <p>{user ? user.firstName : 'Anonym'}</p>
            </div>
            {modalOpen && <ModalWindow close={modalHandler}>
                {
                    ([editMode, setMode]) => {
                        const submitEdit = () => {
                            submitData()
                            setMode(!editMode)
                        }
                        return (
                            <div className={styles.container}>
                                <img src={user?.avatar} className={styles.avatar} alt={''} />
                                {/*<input type={'file'} onClick={(e) => {*/}
                                {/*    console.log(e)}}/>*/}
                                <p className={styles.name}>{user ? `${user.firstName} ${user.lastName}` : 'Anonym'}</p>
                                {editMode && <input type="text" defaultValue={user.firstName} className={styles.inputField} ref={firstNameInputRef} />}
                                {editMode && <input type="text" defaultValue={user.lastName} className={styles.inputField} ref={lastNameInputRef} />}
                                <button onClick={() => logOut()} className={`${styles.buttons} ${styles.secondary}`}>Log Out</button>
                                {editMode ? (
                                    <button onClick={submitEdit} className={`${styles.buttons} ${styles.primary}`}>Save</button>
                                ) : (
                                    <button onClick={() => setMode(!editMode)} className={`${styles.buttons} ${styles.secondary}`}>Edit</button>
                                )}
                            </div>
                        )}
                }
            </ModalWindow>}
        </>

    )
}
const mapStateToProps = ({user}) => ({user});

const mapDispatchToProps = {
    updateUserRequest,
    logOut
}
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);