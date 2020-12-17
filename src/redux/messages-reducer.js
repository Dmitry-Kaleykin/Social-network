const MSG_ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
    dialogsData: [
        {id: 1, name: "name1"},
        {id: 2, name: "name2"},
    ],
    messagesData: [
        {id: 1, message: "Zdarova", avatar: "https://www.interjet.com/images/img.jpg",},
        {id: 2, message: "Ti ohyel", avatar: "https://www.interjet.com/images/img.jpg",},
    ],
}

function messagesReducer (state = initialState, action) {
    
    switch (action.type) {
        case MSG_ADD_MESSAGE: {
            let message = {
                id: 5,
                message: action.newDialogText,
                avatar: "https://www.interjet.com/images/img.jpg",
            };
            return {
                ...state,
                messagesData: [...state.messagesData, message],
                newMessageText: "",
            };
        }
        default:
            return state;
    }
}

export function addMessage (newDialogText) {
    return ({
        type: MSG_ADD_MESSAGE,
        newDialogText,
    })
}

export default messagesReducer;