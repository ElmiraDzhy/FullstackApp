import React from 'react';
import Chat from '../../components/Chat';
import DialogList from '../../components/DialogList';
import MessageArea from '../../components/MessageArea';
import styles from './Dashboard.module.css';

function Dashboard (props) {
    return (
        <main className={styles.main}>
            <DialogList/>
            <section className={styles.container}>
                <Chat/>
                <MessageArea/>
            </section>
        </main>
    );
}

export default Dashboard;