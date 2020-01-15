import * as authActionType from './auth.actionType';
import axios from '../../axis-orders';

export const AuthStart = () => {
    return {
        type: authActionType.AUTH_START
    };
}

export const AuthSuccess = (token, userId) => {
    return {
        type: authActionType.AUTH_SUCCESS,
        token: token,
        userId: userId
    };
}

export const AuthFail = (error) => {
    return {
        type: authActionType.AUTH_FAIL,
        error: error
    };
}

export const checkAuthTimeout = (expireTime) => {
    return (dispatch) => {
        setTimeout(() => dispatch(AuthLogout()), expireTime);
    }
}

export const AuthLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expire_date');
    return {
        type: authActionType.AUTH_LOGOUT,
    };
}

export const Auth = (email, password) => {

    return (dispatch) => {
        dispatch(AuthStart());

        const authData = {
            email: email,
            password: password
        }
        axios.post('posts', authData).then((response) => {
            console.log(response);
            localStorage.setItem('token', 'alskdjaliuqon,xcnz,ckhasdfihfaskldcn,xmnczj,xhkajsdhkajshdkaj')
            localStorage.setItem('expire_date', 456000)
            dispatch(AuthSuccess('alskdjaliuqon,xcnz,ckhasdfihfaskldcn,xmnczj,xhkajsdhkajshdkaj', 1));
        }).catch(error => {
            console.log('error', error);
            dispatch(AuthFail(error));
        });
    }
}


