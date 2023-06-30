import React, {useState} from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

function Home (props) {
    const [view, setView] = useState(true);

    const clickHandler = () => {
        setView(!view);
    }
    const btnText = view ? "SignUp" : "SignIn";

    return (
        <div>
            <button onClick={clickHandler}>{btnText}</button>
            {view ? <SignIn/> : <SignUp/>}
        </div>
    )
}

export default Home;