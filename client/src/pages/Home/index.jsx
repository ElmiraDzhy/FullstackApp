import React, {useState} from 'react';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import styles from './Home.module.css'
import {useNavigate} from "react-router-dom";

function Home (props) {
    const [view, setView] = useState(true);
    const navigate = useNavigate();
    const sendApiRequest = (response) => {
        response.then(({data: {data, token}}) => {
            localStorage.setItem('token', token); // sync operation, the part of WEB API
            props.sendUser(data);
            navigate('/messenger');
        })
    }

    const clickHandler = () => {
        setView(!view);
    }
    const btnText = view ? "SignUp" : "SignIn";

    return (
        <div className={styles['main-wrapper']}>
            <button className={styles['btn']}  onClick={clickHandler}>{btnText}</button>
            {view ? <SignIn sendData={sendApiRequest}/> : <SignUp sendData={sendApiRequest}/>}
        </div>
    )
}

export default Home;