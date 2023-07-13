import React, {useRef, useState} from 'react';
import {connect} from "react-redux";
import {addMessageRequest} from "../../actions/actionCreators";
import styles from './MessageArea.module.css'
import DragNDropArea from "../DragNDropArea";

function MessageArea (props) {
    const {currentChat, addMessageRequest} = props;
    const [value, setValue] = useState('');
    const [image, setImage] = useState('');
    const previewRef = useRef('');

    const submitHandler = (e) => {
        e.preventDefault();
        if(image || value){
            const newMessage = {
                body: value,
                chatId: currentChat._id,
                image
        }
    addMessageRequest(newMessage);
    setValue('');
}



    };
    const changeHandler = ({target: {value}}) => {
        setValue(value);
    };

    if(image){
        let reader = new FileReader();
        reader.onloadend = () => {
            previewRef.current.src = reader.result.toString();
        };
        reader.readAsDataURL(image);
    }


    return (

        <div className={styles.container}>
            <form onSubmit={submitHandler}>
                <DragNDropArea sendImage={setImage}>
                <textarea name={'message'} className={styles['text-area']} value={value} onChange={changeHandler}/>
                    {image && <img ref={previewRef} style={{width: "50px", height: "50px"} }/>}
                </DragNDropArea>
                <button type={'submit'} className={styles.btn}></button>
            </form>
        </div>

    )
}

const mapDispatchToProps = {
    addMessageRequest
}
const mapStateToProps = ({currentChat}) => ({currentChat});

export default connect(mapStateToProps, mapDispatchToProps)(MessageArea);