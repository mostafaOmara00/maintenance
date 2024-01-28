import {combineReducers} from "redux";


const message = () => {
    return {
        Message: "Hello from the redux store!"
    }
}

export default combineReducers({
    message
});