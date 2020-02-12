import * as Api from '../Server/data';

// Action Creators

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

// Actions

export const getData = () => (dispatch) =>{
    return Api.getData()
                .then((response) => dispatch(GetDataSuccess(response)))
                .catch((error) => dispatch(GetDataFailure(error)))
}

export const planChange = (data) => (dispatch) =>{
    return Api.updateData(data)
                .then((response) => dispatch(PlanChangeSuccess(response)))
                .catch((error) => dispatch(PlanChangeFailure(error)))
}

export const seatsChange = (data) => (dispatch) =>{
    return Api.updateData(data)
                .then((response) => dispatch(SeatsChangeSuccess(response)))
                .catch((error) => dispatch(SeatsChangeFailure(error)))
}

export const update = (data) => (dispatch) =>{
    return Api.updateData(data)
                .then((response) => dispatch(UpdateSuccess(response)))
                .catch((error) => dispatch(UpdateFailure(error)))
}

export const back = () => (dispatch) => {
    dispatch(Back());
}

export const prevData = (data) => (dispatch) => {
    dispatch(PrevData(data));
}