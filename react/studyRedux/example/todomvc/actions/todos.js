import * as types from '../constants/ActionTypes'

export function addTodo(text) {
  //返回的对象是传入到reducer方法的第二个参数action，在reducer方法中可以
  //通过action.type和action.text获取到这里对应的值，对应解释参照
  //reducer目录下的todo.js文件中的注释1
  return { type: types.ADD_TODO, text }  
}

export function deleteTodo(id) {
  return { type: types.DELETE_TODO, id }
}

export function editTodo(id, text) {
  return { type: types.EDIT_TODO, id, text }
}

export function completeTodo(id) {
  return { type: types.COMPLETE_TODO, id }
}

export function completeAll() {
  return { type: types.COMPLETE_ALL }
}

export function clearCompleted() {
  return { type: types.CLEAR_COMPLETED }
}
