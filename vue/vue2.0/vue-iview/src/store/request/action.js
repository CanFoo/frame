import vueInstance from '../../main'

export default {
  request ({ state, commit }, { url, cb }) {
    state.stack.push(1)
    state.isLoading = true
    window.setTimeout(() => {
      vueInstance.$http.get(url)
      .then((response) => {
        cb(response)
        commit('updateAjaxData', response.data)
        state.stack.pop(1)
        if (!state.stack.length) {
          window.setTimeout(() => {
            state.isLoading = false
          }, 500)
        }
      })
    }, 0)
  }
}
