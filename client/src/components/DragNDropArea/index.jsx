import React, {useEffect, useState} from "react";
import classNames from "classnames";
import cx from "classnames";
import styles from './DragNDropArea.module.css'
const DragNDropArea = (props) => {
    const [drag, setDrag] = useState(false);
    const [file, setFile] = useState(null);

    const dragOver = (e) => {
        e.preventDefault();
        setDrag(true);
    }
    const dragLeave = () => {
        setDrag(false)
    }
    const drop = (e) => {
        e.preventDefault()
        console.log(e)
        setDrag(false)
        console.log(e.dataTransfer.files)
        setFile(e.dataTransfer.files[0])
    }

    const cn = cx({
        [styles.active]: drag
    })
    return (
        <label
            onDragLeave={dragLeave}
            onDragOver={dragOver}
            onDrop={drop}
            className={cn}
        >
            {props.children}
            <input type={'file'} name={'image'} value={file} onChange={(e) => setFile(e.target.value)}/>
        </label>
    )
}

export default DragNDropArea;