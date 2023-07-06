import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from "react";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home/index";
import TestComponent from "./components/testComponent";
import {createStore} from "redux";
import {Provider} from "react-redux";

const initialState = {
    counter: 0,
    inputValue: 0
}

function rootReducer (state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT': {
            return {
                ...state,
                counter: state.counter + state.inputValue
            }
        }
        case 'DECREMENT': {
            return {
                ...state,
                counter: state.counter - state.inputValue
            }
        }
        case 'INPUT_CHANGE': {
            return {
                ...state,
                inputValue: Number(action.payload)
            }
        }

        default:
            return {...state};

    }
}

const store = createStore(rootReducer);


function App () {
    const [user, setUser] = useState(null);
    return (
        // <BrowserRouter>
        //     <Routes>
        //         <Route path={'/'} element={<Home sendUser={setUser}/>}/>
        //         <Route path={'/messenger'} element={<Dashboard user={user}/>}/>
        //     </Routes>
        // </BrowserRouter>
        <Provider store={store}>
            <TestComponent/>
        </Provider>

    );
}

export default App;
