import React, {useState , useRef} from "react";
import {connect} from "react-redux";
import styles from './UserMenu.module.css'
import UserMenuModal from "./UserMenuModal";
import {updateUserRequest} from "../../actions/actionCreators";

function UserMenu (props) {
    const {user, updateUserRequest} = props;
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
    return (
        <>
            <div className={styles['user-menu-container']} onClick={modalHandler}>
                <img src={user?.avatar} className={styles.avatar} alt={''}/>
                <p>{user ? user.firstName : 'Anonym'}</p>
            </div>
            {modalOpen && <UserMenuModal close={modalHandler}>
                {
                    ([editMode, setMode]) => {
                        const submitEdit = () => {
                            submitData()
                            setMode(!editMode)
                        }
                        return (
                            <div>
                                <img src={user?.avatar} className={styles.avatar} alt={''}/>
                                <p>{user ? `${user.firstName} ${user.lastName}` : 'Anonym'}</p>
                                {editMode &&
                                    <input
                                        type={"text"}
                                        defaultValue={user.firstName}
                                        ref={firstNameInputRef}/>}
                                {editMode &&
                                    <input
                                        type={"text"}
                                        defaultValue={user.lastName}
                                        ref={lastNameInputRef}/>}
                                <button>logOut</button>
                                {editMode ? <button onClick={submitEdit}>Save</button> : <button onClick={() => setMode(!editMode)}> Edit</button>}
                            </div>
                        )}
                }
            </UserMenuModal>}
        </>

    )
}
const mapStateToProps = ({user}) => ({user});

const mapDispatchToProps = {
    updateUserRequest
}
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);