import {unstable_HistoryRouter as HistoryRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home/index";
import history from "./history";
import {connect} from "react-redux";
import {getUserDataRequest} from './actions/actionCreators';
import {useEffect} from "react";

function App (props) {
//if we reload page and haven't user object but in local storage is tokens - make request on get user object
  useEffect(()=> {
      if(!props.user){
          props.getUserDataRequest();
      }
  }, []);


    return (
            <HistoryRouter history={history}>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/messenger'} element={<Dashboard/>}/>
                </Routes>
            </HistoryRouter>
    );
}
const mapStateToProps = ({user}) => user;
export default connect(mapStateToProps, {
    getUserDataRequest
})(App);
