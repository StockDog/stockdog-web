import { ActionConst } from 'react-native-router-flux';
import { combineReducers } from 'redux';

// import the other reducers
import loginReducer from './loginReducer';

const sceneReducer = (state = {}, action) => {
    switch(action.type){
        case ActionConst.FOCUS:
            return { ...state, "route": action.routeName };
        default:
            return state;
    }    
}


export default reducers = combineReducers({
    sceneReducer,
    loginReducer,
});
