import {unstable_HistoryRouter as HistoryRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home/index";
import history from "./history";


function App () {
    return (
            <HistoryRouter history={history}>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/messenger'} element={<Dashboard/>}/>
                </Routes>
            </HistoryRouter>
    );
}
/*
* todo:
*  add user icon
* */
export default App;
