import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

const formInputs = (state = {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
}, action) => {
    switch (action.type) {
        case 'FEELING':
            return { ...state, feeling: action.payload }
        case 'UNDERSTANDING':
            return { ...state, understanding: action.payload }
        case 'SUPPORT':
            return { ...state, support: action.payload }
        case 'COMMENTS':
            return { ...state, comments: action.payload }
        case 'RESET':
            return {
                feeling: '',
                understanding: '',
                support: '',
                comments: ''
            }
        default: return state
    }

}

const store = createStore(formInputs, applyMiddleware(logger))

export default store