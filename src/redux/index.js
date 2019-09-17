import { createStore, combineReducers} from 'redux'


function user(state = {name: 'redux'}, action) {
  switch (action.type) {
    case 'CHANGE_USER_NAME':
      return {
        ...state,
        name: action.name
      }
    default:
      break;
  }
  return state
}
function project(state = {name: 'min-react'}, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      }
    default:
      break;
  }
  return state
}

var rootReducer = combineReducers({
  user,
  project
})

var $store = createStore(rootReducer)

export default $store;