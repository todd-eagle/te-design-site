const initialState = {
    background: '#9F9EEB'
}

const SET_BACKGROUND = 'SET_BACKGROUND'

export const setBackground = (color) => {
    return {
        type: 'SET_BACKGROUND',
        payload: color
    }
}

export default function (state = initialState, action) {
    switch(action.type) {
        case SET_BACKGROUND:
            console.log("action.payload: ", action.payload)
            return {...state, background: action.payload}
        default:
            return state
    }
}
