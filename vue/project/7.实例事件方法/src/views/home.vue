<style>
.btn {
	width: 100px;
	height: 60px;
	background: #666;
	text-align: center;
	line-height: 60px;
	color: #fff;
	margin: 20px;
	border-radius: 8px;
}
</style>

<template>

	<!-- 外层必须加一个单元素（这里是div），否则会报错，参见http://cn.vuejs.org/guide/components.html#片断实例 -->
	<div>
		
		<div v-if="$loadingRouteData" class="loading">正在加载...</div>
		<div v-if="!$loadingRouteData" class="loading">
			<h1>HOME</h1>
			<!-- 在router.js文件中实现了路由功能 -->
			<div class="link" v-link="{name: 'page', params: {active_id: 123}}">page</div>
			<List :redata.sync="seData"></List>
		</div>
	</div>
</template>

<script>
import List  from "../components/list.vue"
export default {
	data: () => {
		return {
			seData: "world"
		}
	},
	components: {
		List
	},
	route: {
		data: (transition) => {
			transition.next();
		}
	},
	events: {
	  'dispatch1' () {
	    console.log('dispatch1_test')	
	  },
	  'dispatch2' (msg) {
	    console.log(msg)	
	  },
	  'emit1' () {
	  	console.log('emit1_test')
	  }
	},
	ready () {
		/*触发当前实例上的事件*/
		this.$emit('emit1');

		window.setTimeout(() => {  
			/*$broadcast对广播到子组件的监听器（定义在子组件中的events中的方法），第一个参数为匹配字符串，匹配符合就执行自定义中相应的匹配方法*/
			this.$broadcast('broadcast1');  
			/*第二个参数为需要传递的额外参数，在子组件中的自定义事件方法中可以通过形参接收到*/
			this.$broadcast('broadcast2', "b222");

		}, 500) //延时等待List组件生成自定义事件，才能进行触发
	}
}
</script>