// Mock back end data

export const PLAN_COSTS = {
    basic:  1,
    good:   10,
    better: 100,
    best:   1000
  }
  
  export const PLAN_NAMES = {
    basic:  'Basic',
    good:   'Good',
    better: 'Better',
    best:   'Best'
  }

  export const CURRENCIES = {
    usd: 'USD',
    pound: 'GBP',
    euro: 'EUR',
    inr: 'INR'
  }
  
  let prevSubscription;
  let storedSubscription = {
    plan: 'good',
    name: 'Good',
    seats: 5,
    cost:  50
  };

  // [GET]'/api/current'
  export const getData = () => {
      return new Promise((resolve, reject) => {
        resolve(storedSubscription)
      })
  }

  // 'api/preview
  export const previewData = (settings) => {
      let newData = {
        plan:  settings.data.plan,
        name:  PLAN_NAMES[settings.data.plan],
        seats: settings.data.seats,
        cost:  settings.data.seats * PLAN_COSTS[settings.data.plan]
      }
      
      return new Promise((resolve, reject) => {
        resolve(newData);
    })
  }

  // [PUT]'api/current
  export const updateData = (settings) => {
    let newData = {
        plan:  settings.data.plan,
        name:  PLAN_NAMES[settings.data.plan],
        seats: settings.data.seats,
        cost:  settings.data.seats * PLAN_COSTS[settings.data.plan]      
        }
    prevSubscription = storedSubscription;
    storedSubscription = newData;;

    return new Promise((resolve, reject) =>{
      resolve(newData);
    })
  }