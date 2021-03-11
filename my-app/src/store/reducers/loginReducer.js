import { APPLICATIONDATA } from '../../constants';
import {updateObject} from '../../updateDataFunction'
const initialState = {
username:'',
password:'',
success: ''
};

export const LoginReducer = (state=initialState, action) =>{
    if(action.type=APPLICATIONDATA.LOGIN_SUCCESS){
        return updateObject(state, {[action.key]: action.value})
    }

}