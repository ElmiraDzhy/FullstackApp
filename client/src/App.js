import {unstable_HistoryRouter as HistoryRouter, Routes, Route} from "react-router-dom";
import {useEffect} from "react";
import {connect} from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home/index";
import history from "./history";


function App (props) {

    useEffect(()=>{
        if(props.notification){
            const {body, type} = props.notification;
            toast[type](body, {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    }, [props.notification]);
    return (
        <>
            <HistoryRouter history={history}>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/messenger'} element={<Dashboard/>}/>
                </Routes>
            </HistoryRouter>
            <ToastContainer />
        </>
            );
}

const mapStateToProps = ({notification}) => ({notification})
export default connect(mapStateToProps)(App);

