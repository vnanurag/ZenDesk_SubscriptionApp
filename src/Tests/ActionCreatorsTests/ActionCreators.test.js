import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../redux/actions'
import * as types from '../../redux/actions'
import fetchMock from 'fetch-mock'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Action Creators', () => {
 
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates GET_DATA_SUCCESS when get data succeeds', () => {
    fetchMock.getOnce('/api/current', {
      body: {},
      headers: { 'content-type': 'application/json' }
    })

    const expectedResponse = {
        plan: 'good',
        name: 'Good',
        seats: 5,
        cost:  50
      };

    const expectedActions = [
      { type: types.GetDataSuccess().type, payload: expectedResponse }
    ]

    const store = mockStore({  
        plan: 'good',
        name: 'Good',
        seats: 5,
        cost:  50 });

    return store.dispatch(actions.getData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates PLAN_CHANGE_SUCCESS when plan change succeeds', () => {
    fetchMock.getOnce('/api/preview', {
      body: {
        data:{
            plan: 'good',
            name: 'Good',
            seats: 5,
            cost:  50
          }
      },
      headers: { 'content-type': 'application/json' }
    })

    const expectedResponse = {
        plan: 'good',
        name: 'Good',
        seats: 5,
        cost:  50
      };

    const expectedActions = [
      { type: types.PlanChangeSuccess().type, payload: expectedResponse }
    ]

    const store = mockStore({  
        plan: 'good',
        name: 'Good',
        seats: 5,
        cost:  50 });

    const request = {
        data:{
            plan: 'good',
            name: 'Good',
            seats: 5,
            cost:  50
          }
    }

    return store.dispatch(actions.planChange(request)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates SEATS_CHANGE_SUCCESS when seats change succeeds', () => {
    fetchMock.getOnce('/api/preview', {
      body: {
        data:{
            plan: 'good',
            name: 'Good',
            seats: 5,
            cost:  50
          }
      },
      headers: { 'content-type': 'application/json' }
    })

    const expectedResponse = {
        plan: 'good',
        name: 'Good',
        seats: 5,
        cost:  50
      };

    const expectedActions = [
      { type: types.SeatsChangeSuccess().type, payload: expectedResponse }
    ]

    const store = mockStore({  
        plan: 'good',
        name: 'Good',
        seats: 5,
        cost:  50 });

    const request = {
        data:{
            plan: 'good',
            name: 'Good',
            seats: 5,
            cost:  50
          }
    }

    return store.dispatch(actions.seatsChange(request)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })   
  
  it('creates UPDATE_SUBSCRIPTION_SUCCESS when subscription update succeeds', () => {
    fetchMock.getOnce('/api/current', {
      type: 'PUT',
      body: {
        data:{
            plan: 'good',
            name: 'Good',
            seats: 5,
            cost:  50
          }
      },
      headers: { 'content-type': 'application/json' }
    })

    const expectedResponse = {
        plan: 'good',
        name: 'Good',
        seats: 5,
        cost:  50
      };

    const expectedActions = [
      { type: types.UpdateSuccess().type, payload: expectedResponse }
    ]

    const store = mockStore({  
        plan: 'good',
        name: 'Good',
        seats: 5,
        cost:  50 });

    const request = {
        data:{
            plan: 'good',
            name: 'Good',
            seats: 5,
            cost:  50
          }
    }

    return store.dispatch(actions.update(request)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates NAVIGATING_BACK_SUCCESS when navigating back succeeds', () => {
    const expectedAction =  { type: types.Back().type, payload: {} }
    expect(actions.Back()).toEqual(expectedAction);
  })

  it('creates PREVIOUS_SUBSCRIPTION_SUCCESS when previous subscription is displayed', () => {
    const expectedResponse = {
        plan: 'good',
        name: 'Good',
        seats: 5,
        cost:  50
      };

    const expectedAction = { type: types.PrevData().type, payload: expectedResponse }

    const request = {
        plan: 'good',
        name: 'Good',
        seats: 5,
        cost:  50
    }

    expect(actions.PrevData(request)).toEqual(expectedAction);
  })

})