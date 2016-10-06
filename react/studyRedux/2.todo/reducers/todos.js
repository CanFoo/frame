import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes'

const initialState = [
  {
    text: 'Use Redux ！！',
    id: 0
  }
]

//注释1:方法第一个参数是全局redux.state所对应的值，
//第二个参数是由action所对应的函数返回的对象
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce(function(maxId, todo){
            return Math.max(todo.id, maxId);
          } , -1) + 1,
          text: action.text
        }, 
        ...state
      ]

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          Object.assign({}, todo, { text: action.text }) :
          todo
      )
      
    default:
      return state
  }
}
