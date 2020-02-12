export const InitialState = (data) => {
    return {
        type: 'INITIAL_STATE',
        payload: data
    }
}

export const GetDataSuccess = (data) =>{
    return {
        type: 'GET_DATA_SUCCESS',
        payload: data
    }
}

export const GetDataFailure = (data) =>{
    return {
        type: 'GET_DATA_FAILURE',
        payload: data
    }
}

export const PlanChangeSuccess = (data) =>{
    return {
        type: 'PLAN_CHANGE_SUCCESS',
        payload: data
    }
}

export const PlanChangeFailure = (data) =>{
    return {
        type: 'PLAN_CHANGE_FAILURE',
        payload: data
    }
}

export const SeatsChangeSuccess = (data) =>{
    return {
        type: 'SEATS_CHANGE_SUCCESS',
        payload: data
    }
}

export const SeatsChangeFailure = (data) =>{
    return {
        type: 'SEATS_CHANGE_FAILURE',
        payload: data
    }
}

export const UpdateSuccess = (data) =>{
    return {
        type: 'UPDATE_SUBSCRIPTION_SUCCESS',
        payload: data
    }
}

export const UpdateFailure = (data) =>{
    return {
        type: 'UPDATE_SUBSCRIPTION_FAILURE',
        payload: data
    }
}

export const SubmitSucess = (data) =>{
    return {
        type: 'SUBMIT_SUBSCRIPTION_SUCCESS',
        payload: data
    }
}

export const SubmitFailure = (data) =>{
    return {
        type: 'SUBMIT_SUBSCRIPTION_FAILURE',
        payload: data
    }
}

export const Back = () => {
    return {
        type: 'NAVIGATING_BACK_SUCCESS',
        payload: {}
    }
}

export const PrevData = (data) => {
    return {
        type: 'PREVIOUS_SUBSCRIPTION_SUCCESS',
        payload: data
    }
}