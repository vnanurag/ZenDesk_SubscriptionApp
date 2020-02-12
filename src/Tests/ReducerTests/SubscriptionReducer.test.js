import reducer from '../../reducers/subscriptionReducer'
import * as types from '../../redux/actions'

describe('subscription reducer', () => {

  it('should return the initial state', () => {
    let intialStore = {
        plan: '',
        name: '',
        seats: 0,
        cost:  0,
        overview: false,
        prevData:{},
        errorMessage: ''
      }

    expect(reducer(undefined, {})).toEqual(intialStore)
  })

  it('should handle GET_DATA_SUCCESS', () => {
      let prevState = {
        plan: 'basic',
        name: 'Basic',
        seats: 5,
        cost:  5
      }

      let expected = {
        plan: 'good',
        name: 'Good',
        seats: 5,
        cost:  50
      }

      let action = {type: types.GetDataSuccess().type, payload: expected}

    expect(reducer([], action)).toEqual(expected)
    expect(reducer(prevState, action)).toEqual(expected)
    })

    it('should handle GET_DATA_FAILURE', () => {
        let prevState = {
          plan: 'basic',
          name: 'Basic',
          seats: 5,
          cost:  5
        }
  
        let expected = {
            plan: 'basic',
            name: 'Basic',
            seats: 5,
            cost:  5,
            overview: false,
            errorMessage: 'get data error'
        }
  
        let action = {type: types.GetDataFailure().type, payload: 'get data error'}
  
      expect(reducer(prevState, action)).toEqual(expected)
      })
      
    it('should handle PLAN_CHANGE_SUCCESS', () => {
        let prevState = {
            plan: 'basic',
            name: 'Basic',
            seats: 5,
            cost:  5
          }
    
          let expected = {
            plan: 'good',
            name: 'Good',
            seats: 5,
            cost:  50
          }
    
          let action = {type: types.PlanChangeSuccess().type, payload: expected}
    
        expect(reducer(prevState, action)).toEqual(expected)
    })

    it('should handle PLAN_CHANGE_FAILURE', () => {
        let prevState = {
            plan: 'basic',
            name: 'Basic',
            seats: 5,
            cost:  5
          }
    
          let expected = {
            plan: 'basic',
            name: 'Basic',
            seats: 5,
            cost:  5,
            errorMessage: 'plan change error'
          }
    
          let action = {type: types.PlanChangeFailure().type, payload: 'plan change error'}
    
        expect(reducer(prevState, action)).toEqual(expected)
    })

    it('should handle SEATS_CHANGE_SUCCESS', () => {
        let prevState = {
            plan: 'basic',
            name: 'Basic',
            seats: 5,
            cost:  5
          }
    
          let expected = {
            plan: 'basic',
            name: 'Basic',
            seats: 10,
            cost:  100
          }
    
          let action = {type: types.SeatsChangeSuccess().type, payload: expected}
    
        expect(reducer(prevState, action)).toEqual(expected)
    })

    it('should handle SEATS_CHANGE_FAILURE', () => {
        let prevState = {
            plan: 'basic',
            name: 'Basic',
            seats: 5,
            cost:  5
          }
    
          let expected = {
            plan: 'basic',
            name: 'Basic',
            seats: 5,
            cost:  5,
            errorMessage: 'seats change error'
          }
    
          let action = {type: types.SeatsChangeFailure().type, payload: 'seats change error'}
    
        expect(reducer(prevState, action)).toEqual(expected)
    })

    it('should handle UPDATE_SUBSCRIPTION_SUCCESS', () => {
        let prevState = {
            plan: 'basic',
            name: 'Basic',
            seats: 5,
            cost:  5
          }
    
          let expected = {
            plan: 'good',
            name: 'Good',
            seats: 10,
            cost:  100,
            overview: true,
            prevData:{}
          }
    
          let action = {type: types.UpdateSuccess().type, payload: expected}
    
        expect(reducer(prevState, action)).toEqual(expected)
    })

    it('should handle UPDATE_SUBSCRIPTION_FAILURE', () => {
        let prevState = {
            plan: 'basic',
            name: 'Basic',
            seats: 5,
            cost:  5
          }
    
          let expected = {
            plan: 'basic',
            name: 'Basic',
            seats: 5,
            cost:  5,
            overview: false,
            errorMessage: 'update subscription error'
          }
    
          let action = {type: types.UpdateFailure().type, payload: 'update subscription error'}
    
        expect(reducer(prevState, action)).toEqual(expected)
    })

    it('should handle NAVIGATING_BACK_SUCCESS', () => {
        let prevState = {
            plan: 'basic',
            name: 'Basic',
            seats: 5,
            cost:  5
          }
    
          let expected = {
            plan: 'basic',
            name: 'Basic',
            seats: 5,
            cost:  5,
            overview: false
          }
    
          let action = {type: types.Back().type, payload: {}}
    
        expect(reducer(prevState, action)).toEqual(expected)
    })

    it('should handle PREVIOUS_SUBSCRIPTION_SUCCESS', () => {
        let prevState = {
            plan: 'basic',
            name: 'Basic',
            seats: 5,
            cost:  5
          }
    
          let expected = {
            plan: 'good',
            name: 'Good',
            seats: 5,
            cost:  50,
            prevData: prevState
          }
    
          let action = {type: types.PrevData().type, payload: prevState}
    
        expect(reducer(expected, action)).toEqual(expected)
    })
})