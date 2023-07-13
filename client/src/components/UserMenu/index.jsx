import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import styles from './UserMenu.module.css';
import { updateUserRequest, logOut } from '../../actions/actionCreators';
import CONSTANTS from '../../constants';
import UserMenuModal from '../UserMenuModal';

const UserMenu = (props) => {
    const [modalOpen, setOpen] = useState(false);

    const modalHandler = () => {
        setOpen(!modalOpen)
    }

    const imageSrc = props.user?.imagePath || CONSTANTS.USER_PLACEHOLDER;

    return (
        <>
            <div className={styles['user-menu-container']} onClick={modalHandler}>
                <img src={imageSrc} className={styles.avatar} />

                <p>{props.user?.firstName} {props.user?.lastName}</p>
            </div>
            {modalOpen && <UserMenuModal modalHandler={modalHandler}/>}
        </>
    );
}

const mapStateToProps = ({ user }) => ({ user })

const mapDispatchToProps = {
    updateUserRequest,
    logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);