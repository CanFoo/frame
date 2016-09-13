<style>
	
</style>

<template>

	<!-- 外层必须加一个单元素（这里是div），否则会报错，参见http://cn.vuejs.org/guide/components.html#片断实例 -->
	<div>
		<!-- 切换进来的组件会得到一个名为 $loadingRouteData 的元属性，其初始值为 true ，在 data 钩子函数被断定后会被赋值为 false
		如果将route.data函数中不执行transition.next, 则$loadingRouteData值为true -->
		<div v-if="$loadingRouteData" class="loading">正在加载...</div>
		<div v-if="!$loadingRouteData" class="loading">
			<h1>HOME</h1>
			<!-- 在router.js文件中实现了路由功能 -->
			<div class="link" v-link="{name: 'page', params: {active_id: 123}}">page</div>
		</div>
	</div>
</template>

<script>
module.exports = {
	route: {
		data: function(transition) {
			setTimeout(function(){
				transition.next();
			},1000);
		}
	}
}
</script>