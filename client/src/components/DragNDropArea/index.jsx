import React, {useState} from 'react';
import styles from './DragNDropArea.module.css';
import cx from 'classnames';

const DragNDropArea = (props) => {
    const [drag, setDrag] = useState(false);

    const dragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDrag(true);
    }

    const dragLeave = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDrag(false);
    }

    const drop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDrag(false);
        //       imageReader(event.dataTransfer.files[0]);
        props.sendImage(event.dataTransfer.files[0]);
    }



    const inputFileHandler = (event) => {
//        imageReader(event.target.files[0]);
        props.sendImage(event.target.files[0]);
    }

    const cn = cx(styles.container, {
        [styles.active]: drag
    });

    return (
        <div
            type="file"
            onDragOver={dragOver}
            onDragLeave={dragLeave}
            onDrop={drop}
            className={cn}>


            {props.children}


            <input
                type="file"
                name="image"
                files={props.file}
                onChange={inputFileHandler}
            onClick={() => {
               }}/>

        </div>
    );
}

export default DragNDropArea;