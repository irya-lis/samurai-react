const SEND_MESSAGE = "SEND-MESSAGE";

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: "Dmitriy"},
        {id: 2, name: "Anna"},
        {id: 3, name: 'Pavel'}
    ] as Array <DialogType>,

    messages: [
        {id: 1, message: 'I am cucumber'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'What do you'}
    ] as Array <MessageType>
}

type InitialStateType = typeof initialState

const dialogReducer = (state = initialState, action): InitialStateType => {

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

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => {
    return {
        type: SEND_MESSAGE, newMessageBody
    }
}


export default dialogReducer;
