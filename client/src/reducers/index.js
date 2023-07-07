import ACTION_TYPES from './../actions/types';

const initialState = {
    user: {
        firstName: 'John',
        lastName: 'Doe',
        id: 147
    },
    chatList: [],
    currentChat: {
        id: 76786998,
        name: 'First chat',
        members: [],
        messages: []
    },
}

function rootReducer (state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case ACTION_TYPES.ADD_MESSAGE: {
            return ({
                ...state,
                currentChat: {
                    ...state.currentChat,
                    messages: state.messages.concat(action.payload)
                }
            })
        }
        default: {
            return {...state}
        }
    }
}


export default rootReducer;