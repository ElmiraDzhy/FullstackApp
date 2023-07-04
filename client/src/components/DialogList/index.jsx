import React, {useEffect, useState} from 'react';
import {getUserChats} from "../../api";
import {useNavigate} from "react-router-dom";

function DialogList (props) {
    const [list, setList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token')
        getUserChats(token)
            .then(({data: {data}}) => {
                setList(data);
            })
            .catch(err => {
                console.log(err);
                navigate('/');
            });
    }, []);

    const mapList = (chat) => <li key={chat._id}>{chat.name}</li> ;


    return (
        <div>
            <ul>
                (first dialog here)
                {list && list.map(mapList)}
            </ul>
        </div>
    )
}

export default DialogList;