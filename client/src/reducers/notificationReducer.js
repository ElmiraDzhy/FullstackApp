import ACTION_TYPES from "../actions/types";

const initialState = null;


function notificationReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.NEW_NOTIFICATION:{
            return action.payload
        }
        default: {
            return state;
        }
    }
}

export default notificationReducer;