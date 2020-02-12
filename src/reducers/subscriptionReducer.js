import * as Api from '../Server/data';
import { GetDataSuccess, GetDataFailure, PlanChangeSuccess, PlanChangeFailure, SeatsChangeSuccess, SeatsChangeFailure, SubmitSucess, SubmitFailure, Back, PrevData, UpdateSuccess, UpdateFailure } from '../redux/actions';

let intialStore = {
    plan: '',
    name: '',
    seats: 0,
    cost:  0,
    overview: false,
    prevData:{},
    errorMessage: ''
  };

const subscriptionReducer = (state = intialStore, action) => {
    switch(action.type){
        case "INITIAL_STATE":
            return {
                state
            }
        case 'GET_DATA_SUCCESS':{
            const payload = action.payload;
            state = payload;
            return state;
        }
        case 'GET_DATA_FAILURE':{
            const payload = action.payload;
            return {
                ...state,
                overview: false,
                errorMessage: payload
            }
        }
        case 'PLAN_CHANGE_SUCCESS':{
            const payload = action.payload;
            return {
                ...state,
                plan: payload.plan,
                name: payload.name,
                seats: payload.seats,
                cost: payload.cost
            }
        }
        case 'PLAN_CHANGE_FAILURE':{
            const payload = action.payload;
            return {
                ...state,
                errorMessage: payload
            };
        }
        case 'SEATS_CHANGE_SUCCESS':{
            const payload = action.payload;
            return {
                ...state,
                plan: payload.plan,
                name: payload.name,
                seats: payload.seats,
                cost: payload.cost
            }
        }
        case 'SEATS_CHANGE_FAILURE':{
            const payload = action.payload;
            return {
                ...state,
                errorMessage: payload
            };
        }
        case 'UPDATE_SUBSCRIPTION_SUCCESS':{
            const payload = action.payload;
            return{
                ...state,
                plan: payload.plan,
                name: payload.name,
                seats: payload.seats,
                cost: payload.cost,
                overview: true,
                prevData:{}
            }
        }
        case 'UPDATE_SUBSCRIPTION_FAILURE':{
            const payload = action.payload;
            return {
                ...state,
                overview: false,
                errorMessage: payload
            }
        }
        case 'NAVIGATING_BACK_SUCCESS':{
            return {
                ...state,
                overview: false
            }
        }
        case 'PREVIOUS_SUBSCRIPTION_SUCCESS':{
            const payload = action.payload;
            return {
                ...state,
                prevData: payload

            }
        }
        default: {
            return state;
        }    
    }
}
 
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

export default subscriptionReducer;