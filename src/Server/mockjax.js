// import $ from '../../node_modules/jquery';
// import mockjax from '../../node_modules/jquery-mockjax'

// $.mockjax.clear();

// export const PLAN_COSTS = {
//   basic:  1,
//   good:   10,
//   better: 100,
//   best:   1000
// }

// export const PLAN_NAMES = {
//   basic:  'Basic',
//   good:   'Good',
//   better: 'Better',
//   best:   'Best'
// }

// let prevSubscription;
// let storedSubscription = {
//   plan: 'good',
//   name: 'Good',
//   seats: 5,
//   cost:  50
// };

// $.mockjax({
//   url: "/api/current",
//   type: 'get',
//   responseText: storedSubscription      
// });

// $.mockjax({
//   url: "/api/current",
//   type: 'put',
//   responseDelay: 1000,
//   response: function(settings) {
//     var newData = {
//       plan:  settings.data.plan,
//       name:  PLAN_NAMES[settings.data.plan],
//       seats: settings.data.seats,
//       cost:  settings.data.seats * PLAN_COSTS[settings.data.plan]      
//     }
//     prevSubscription = storedSubscription;
//     storedSubscription = newData;
//     this.responseText = newData;
//   }
// });

// $.mockjax({
//   url: "/api/preview",
//   responseDelay: 1000,
//   response: function(settings) {
//     this.responseText = {
//       plan:  settings.data.plan,
//       name:  PLAN_NAMES[settings.data.plan],
//       seats: settings.data.seats,
//       cost:  settings.data.seats * PLAN_COSTS[settings.data.plan]      
//     }
//   } 
// });