import { Toast } from 'antd-mobile';
const RECEIVE_DATA = 'RECEIVE_DATA'

export const receiveData = (json) => ({
  type: RECEIVE_DATA,
  payload: {
    data: json
  }
})

let hideTimer = null
export function requestData (url) {
  Toast.loading('加载中...', 1000000)
  return (dispatch, getState) => {
    return fetch(url)
      .then(response => response.json())
      .then(json => { 
        dispatch(receiveData(json))
        clearTimeout(hideTimer)
        /*延时是为了更好显示loading，可去掉*/
        hideTimer = window.setTimeout(() => {
          Toast.hide()
        }, 1000)
        return json
      })
  }
}

export const actions = {
  receiveData,
  requestData
}

const ACTION_HANDLERS = {
  [RECEIVE_DATA]: (state, action) => {
    return ({json: action.payload})
  }
}

const initialState = {
  json: {}
}
export default function requestReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
