const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    dialogs: [
        {id: 1, name: "Dmitriy"},
        {id: 2, name: "Anna"},
        {id: 3, name: 'Pavel'}
    ],

    messages: [
        {id: 1, message: 'I am cucumber'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'What do you'}
    ],

    newMessageText: '',
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text
            };
        case SEND_MESSAGE:
            let text = state.newMessageText;

            return {
                ...state,
                newMessageText: "",
                messages: [...state.messages, {id: 5, message: text}]
            }

        default:
            return state;

    }

}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}

export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        text: text,
    }
}

export default dialogReducer;
