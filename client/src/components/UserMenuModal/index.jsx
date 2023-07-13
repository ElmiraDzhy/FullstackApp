import React, { useState, useRef } from 'react';
import ModalWindow from '../ModalWindow';
import DragNDropArea from '../DragNDropArea';
import CONSTANTS from '../../constants';
import { connect } from 'react-redux';
import { updateUserRequest, logOut } from '../../actions/actionCreators';
import styles from './UserMenuModal.module.css';

const UserMenuModal = (props) => {
    const [image, setImage] = useState('');
    const previewRef = useRef(null);
    const firstNameInputRef = useRef(null);
    const lastNameInputRef = useRef(null);

    const submitData = () => {
        const firstName = firstNameInputRef.current.value;
        const lastName = lastNameInputRef.current.value;

        props.updateUserRequest({
            firstName,
            lastName,
            image
        })
    }

    const imageSrc = props.user?.imagePath || CONSTANTS.USER_PLACEHOLDER;



    return (
        <ModalWindow close={props.modalHandler}>
            {([editMode, setEdit]) => {

                const submitEdit = () => {
                    submitData();
                    setEdit(!editMode);
                }

                if(editMode && image) {
                    let reader = new FileReader();
                    reader.onloadend = () => {
                        previewRef.current.src = reader.result.toString();
                    };
                    reader.readAsDataURL(image);

                }



                const editView = () => {
                    return (<>
                        <DragNDropArea sendImage={setImage} file={image}>
                            <img src={imageSrc}
                                 ref={previewRef}
                                 className={styles['full-avatar']} />
                        </DragNDropArea>
                        <div>
                            <input
                                type="text"
                                defaultValue={props.user.firstName}
                                ref={firstNameInputRef}
                                className={styles['user-input']}
                            />
                            <input
                                type="text"
                                defaultValue={props.user.lastName}
                                ref={lastNameInputRef}
                                className={styles['user-input']}

                            />
                        </div>
                        <button className={styles.btn} onClick={submitEdit}>Save</button>
                        <button className={styles.btn} onClick={() => { setEdit(!editMode) }}>Cancel</button>
                    </>)
                }

                const userView = () => {
                    return (
                        <>
                            <img src={imageSrc} className={styles['full-avatar']} />
                            <h1>
                                {props.user?.firstName} {props.user?.lastName}
                            </h1>
                            <div style={{display: 'flex', width: '100%', alignContent: 'center', justifyContent: 'center'}}>
                                <button className={styles.btn} onClick={() => { setEdit(!editMode) }}>Edit</button>
                                <button className={styles.btn} onClick={props.logOut}>logOut</button>

                            </div>

                        </>
                    )
                }

                return (
                    <>
                        {editMode ? editView() : userView()}
                    </>
                )
            }}
        </ModalWindow>
    )
}


const mapStateToProps = ({ user: {user} }) => ({ user })

const mapDispatchToProps = {
    updateUserRequest,
    logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenuModal);