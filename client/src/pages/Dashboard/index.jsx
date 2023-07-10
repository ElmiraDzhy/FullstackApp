import React, {useEffect} from 'react';
import Chat from '../../components/Chat';
import DialogList from '../../components/DialogList';
import MessageArea from '../../components/MessageArea';
import styles from './Dashboard.module.css';
import {connect} from "react-redux";
import {getUserDataRequest, getAllUserChatRequest} from "../../actions/actionCreators";

function Dashboard (props) {

    //if we reload page and haven't user object but in local storage is tokens - make request on get user object
    useEffect(()=> {
        if(!props.user){
            props.getUserDataRequest();
        }else{
            props.getAllUserChatRequest()
        }
    }, []);
    return (
        <main className={styles.main}>
            <DialogList/>
            <section className={styles.container}>
                <Chat/>
                <MessageArea/>
            </section>
        </main>
    );
}
const mapStateToProps = ({user}) => user;
export default connect(mapStateToProps,{
    getUserDataRequest,
    getAllUserChatRequest
})(Dashboard);