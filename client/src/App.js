import {unstable_HistoryRouter as HistoryRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home/index";
import {Provider} from "react-redux";
import store from "./store"
import history from "./history";

function App () {

    return (
        <Provider store={store}>
            <HistoryRouter history={history}>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/messenger'} element={<Dashboard/>}/>
                </Routes>
            </HistoryRouter>
        </Provider>
    );
}

export default App;
