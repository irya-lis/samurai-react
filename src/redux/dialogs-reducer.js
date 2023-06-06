const SEND_MESSAGE = "SEND-MESSAGE";

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
    ]
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let text = action.newMessageText;

            return {
                ...state,
                messages: [...state.messages, {id: 5, message: text}]
            }

        default:
            return state;

    }

}

export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE, newMessageBody
    }
}



export default dialogReducer;
