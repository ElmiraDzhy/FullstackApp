import React, {useState , useRef} from "react";
import {connect} from "react-redux";
import styles from './UserMenu.module.css'
import ModalWindow from "../ModalWindow";
import {updateUserRequest, logOut} from "../../actions/actionCreators";
import CONSTANTS from '../../constants';
import DragNDropArea from "../DragNDropArea";

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

    const updateUserImage = (imagePath) => {
        console.log(imagePath)
        updateUserRequest({imagePath})
    }
    const imagePlaceholder = user?.imagePath || CONSTANTS.USER_PLACEHOLDER;
    return (
        <>
            <div className={styles['user-menu-container']} onClick={modalHandler}>
                <img src={imagePlaceholder} className={styles.avatar} alt={''}/>
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
                            <>
                                <DragNDropArea update={updateUserImage}>
                                    <div className={styles.container}>
                                        <img src={imagePlaceholder} className={styles['full-avatar']} alt={''} />
                                        <p className={styles.name}>{user ? `${user.firstName} ${user.lastName}` : 'Anonym'}</p>
                                        {editMode && <input type="text" defaultValue={user.firstName} className={styles.inputField} ref={firstNameInputRef} />}
                                        {editMode && <input type="text" defaultValue={user.lastName} className={styles.inputField} ref={lastNameInputRef} />}
                                        <div className={styles['button-container']}>
                                            <button onClick={() => logOut()} className={`${styles.buttons} ${styles.secondary}`}>Log Out</button>
                                            {editMode ? (
                                                <button onClick={submitEdit} className={`${styles.buttons} ${styles.primary}`}>Save</button>
                                            ) : (
                                                <button onClick={() => setMode(!editMode)} className={`${styles.buttons} ${styles.secondary}`}>Edit</button>
                                            )}
                                        </div>

                                    </div>
                                </DragNDropArea>
                            </>
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