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
  
  let prevSubscription;
  let storedSubscription = {
    plan: 'good',
    name: 'Good',
    seats: 5,
    cost:  50
  };

  export const getData = () => {
      return new Promise((resolve, reject) => {
        resolve(storedSubscription)
      })
  }

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

  export const submitData = (settings) => {
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