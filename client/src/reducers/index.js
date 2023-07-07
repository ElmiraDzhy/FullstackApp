const initialState = {
    counter: 0,
    inputValue: 0
}

function rootReducer (state = initialState, action) {
    console.log(action)

}

export default rootReducer;