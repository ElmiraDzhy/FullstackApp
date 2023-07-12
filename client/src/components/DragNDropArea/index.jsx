import React, { useState } from "react";
import styles from "./DragNDropArea.module.css";

const DragNDropArea = (props) => {
    const [drag, setDrag] = useState(false);
    const [file, setFile] = useState(null);

    const handleDragEnter = (e) => {
        e.preventDefault();
        setDrag(true);
    };

    const handleDragLeave = () => {
        setDrag(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDrag(false);
        const droppedFile = e.dataTransfer.files[0];
        setFile(droppedFile);
    };

    const handleChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleFileUpload = () => {
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const imagePath = event.target.result;
                props.update(imagePath);
                // You can perform further actions, such as uploading the image to a server and storing the server's URL in the database
            };
            reader.readAsDataURL(file);
        }


    };

    const containerClassName = `${styles.container} ${drag ? styles.active : ""}`;

    return (
        <div
            className={containerClassName}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            {props.children}
            <div className={styles.content}>
                {file ? (
                    <div className={styles.preview}>
                        <img src={URL.createObjectURL(file)} alt="Preview"  className={styles['preview-img']}/>
                        <span>Preview: "{file.name}"</span>
                    </div>
                ) : (
                    <div className={styles.text}>
                        <span>Drag and Drop a File Here</span>
                    </div>
                )}
            </div>
            <input
                type="file"
                name="image"
                id="fileInput"
                className={styles.fileInput}
                onChange={handleChange}
            />
            <div className={styles['button-container']}>
            <label htmlFor="fileInput" className={styles.uploadButton}>
                Choose File
            </label>
            {file && (
                <button className={styles.uploadButton} onClick={handleFileUpload}>
                    Upload
                </button>
            )}
            </div>
        </div>
    );
};

export default DragNDropArea;