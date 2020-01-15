import * as authActionType from '../actions/auth.actionType';
import { authState } from '../states/auth.state';
import { updateObject } from '../utilty';

const authStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
}

const authSuccess = (state, action) => {
    return updateObject(state, { error: null, loading: false, token: action.token, userId: action.userId });
}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null,
        userId: null
    })
}

export const authReducer = (state = authState, action) => {
    switch (action.type) {
        case authActionType.AUTH_START: return authStart(state, action)
        case authActionType.AUTH_SUCCESS: return authSuccess(state, action)
        case authActionType.AUTH_FAIL: return authFail(state, action)
        case authActionType.AUTH_LOGOUT: return authLogout(state, action)
        default: return state
    }
}

export default authReducer;
