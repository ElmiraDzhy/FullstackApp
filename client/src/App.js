import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home/index";
import {Provider} from "react-redux";
import store from "./store"

function App () {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/messenger'} element={<Dashboard/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
