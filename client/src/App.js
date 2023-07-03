import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from "react";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home/index";


function App () {
    const [user, setUser] = useState(null);

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home sendUser={setUser}/>}/>
                <Route path={'/messenger'} element={<Dashboard user={user}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
