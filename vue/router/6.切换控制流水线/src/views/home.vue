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
			<div class="btn" @click="btn()">homebtn</div>

			<!-- redata为父子组件通信的变量属性，sync代表可以双向传递，无sync标志只能父组件传递给子组件 -->
			<list :redata.sync="seData"></list>
		</div>
	</div>
</template>

<script>
module.exports = {
	data: function(){
		return {
			seData: "world"
		}
	},
	methods: {
		btn: function(){
			console.log(this.seData);
			this.seData = "sucess";
		}
	},

	components: {
		list: require('../components/list.vue')
	},
	route: {
		activate: function(transition) {
			console.log("home_activate");
			transition.next();
		},
		deactivate: function(transition) {
			console.log("home_deactivate");
			transition.next();
		},
		canActivate: function(transition) {
			console.log("home_canActivate");
			transition.next();
		},
		canDeactivate: function(transition) {
			console.log("home_canDeactivate");
			transition.next();
		},
		canReuse: function(transition) {
			console.log("home_canReuse");
			transition.next();
		},
		data: function(transition) {
			console.log("home_data");
			transition.next();

		}
	}
}
</script>