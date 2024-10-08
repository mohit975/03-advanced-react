import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions'
import { data } from '../../../data'

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] }
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data }
  }
  if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter((person) => person.id !== action.id)
    return { ...state, people: newPeople }
  }
}
export default reducer
