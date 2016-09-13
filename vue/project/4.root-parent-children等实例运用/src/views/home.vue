<style>
.btn {
	width: 50px;
	height: 30px;
	background: #666;
	text-align: center;
	line-height: 30px;
	color: #fff;
	margin: 20px;
	border-radius: 3px;
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
			<div class="btn" @click="btn()">btn</div>
			<list></list>
		</div>
	</div>
</template>

<script>
module.exports = {
	data: function(){
		return {
			h1: "",
			h2: ""
		}
	},
	methods: {
		homefn: function(str){
			document.write("<h1>homefn: this is "+ str +"</h1>");
		},
		btn: function(){
			this.$children[0].listfn();  //调取子组件（list.vue）的listfn方法
										 //需要等待子组件加载完，否则获取不到，在route.data函数中获取不到。
		}
	},

	components: {
		list: require('../components/list.vue')
	},
	route: {
		data: function(transition) {
			this.$root.appfn("home");  //调取根实例（app.vue）上的appfn的方法
			this.$parent.appfn("home");  //调取父实例（app.vue）上的appfn的方法
			transition.next();
		}
	}
}
</script>