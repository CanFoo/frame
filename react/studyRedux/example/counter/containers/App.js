import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import * as CounterActions from '../actions/counter.js'

//将state.counter绑定到props的counter
function mapStateToProps(state) {
	// console.log("state", state);
	return {
		string: state.string,
		test1: state.test2,
		counter: state.counter
	}
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
  	return bindActionCreators(CounterActions, dispatch)
}


/*connect是真正的重点，它是一个科里化函数，意思是先接受两个参数（数据绑定mapStateToProps和
事件绑定mapDispatchToProps），再接受一个参数（将要绑定的组件本身）： mapStateToProps：构
建好Redux系统的时候，它会被自动初始化，但是你的React组件并不知道它的存在，因此你需要分拣出你
需要的Redux状态，所以你需要绑定一个函数，它的参数是state，简单返回你关心的几个值。
 mapDispatchToProps：声明好的action作为回调，也可以被注入到组件里，就是通过这个函数，它的
 参数是dispatch，通过redux的辅助方法bindActionCreator绑定所有action以及参数的dispatch，
 就可以作为属性在组件里面作为函数简单使用了，不需要手动dispatch。这个mapDispatchToProps是
 可选的，如果不传这个参数redux会简单把dispatch作为属性注入给组件，可以手动当做store.dispatch使用*/
//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Counter)



