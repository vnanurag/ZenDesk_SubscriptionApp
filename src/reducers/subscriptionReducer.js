
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

export default subscriptionReducer;