import { APPLICATIONDATA } from '../../constants';
export const LoginData = (key, value) =>{
    return {
        type:APPLICATIONDATA.LOGIN_SUCCESS,
        key,
        value
    }

}