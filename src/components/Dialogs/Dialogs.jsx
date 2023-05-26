import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Dialog/Message/Message";
import { Navigate } from "react-router-dom";



const Dialogs = (props) => {

    let state = props.dialogsPage;


    let dialogsElement = state.dialogs.map(dialog => <Dialog key={dialog.id} id={dialog.id} name={dialog.name}/>);
    let messagesElement = state.messages.map(message => <Message key={message.id} message={message.message}/>);
    let newMessageBody = state.newMessageText;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageBody(text);
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
                <label>New message</label>
                <textarea
                    placeholder="new message"
                    name="textarea"
                    rows="2"
                    cols="50"
                    onChange={onNewMessageChange}
                    value={newMessageBody}
                />
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>

        </div>
    )
}

export default Dialogs;
