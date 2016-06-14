<style>
	
</style>

<template>

	<!-- 外层必须加一个单元素（这里是div），否则会报错，参见http://cn.vuejs.org/guide/components.html#片断实例 -->
	<div>
		
		<div v-if="$loadingRouteData" class="loading">正在加载...</div>
		<div v-if="!$loadingRouteData" class="loading">
			<h1>HOME</h1>
			<h1>{{ h1 }}</h1>
			<h1>{{ h2 }}</h1>
			<!-- 在router.js文件中实现了路由功能 -->
			<div class="link" v-link="{name: 'page', params: {active_id: 123}}">page</div>
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
	route: {
		data: function(transition) {
				transition.next({
					h1: "hello",
					h2: "world"
				});
		}
	}
}
</script>