const userRole = {
    role: ''
}

export const SET_USER_ROLE = "SET_USER_ROLE";

export const userRoleReducer = (state = userRole, action) => {
    switch (action.type){
        case SET_USER_ROLE:
            return {...state, role: action.payload};
        default:
            return state;
    }
}

export const setUserRole = payload =>({type: SET_USER_ROLE, payload});

