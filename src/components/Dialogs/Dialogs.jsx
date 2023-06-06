import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Dialog/Message/Message";
import { Navigate } from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";



const Dialogs = (props) => {

    let state = props.dialogsPage;


    let dialogsElement = state.dialogs.map(dialog => <Dialog key={dialog.id} id={dialog.id} name={dialog.name}/>);
    let messagesElement = state.messages.map(message => <Message key={message.id} message={message.message}/>);
    let newMessageBody = state.newMessageText;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);

    }

    if(!props.isAuth) return <Navigate to="/login" replace={true}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <div className={s.newMessage}>
                <h3>New message</h3>
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )

}


export default Dialogs;
