<style>
	
</style>

<template>

	<!-- 外层必须加一个单元素（这里是div），否则会报错，参见http://cn.vuejs.org/guide/components.html#片断实例 -->
	<div>
		<h1>HOME</h1>
		<!-- 在router.js文件中实现了路由功能 -->
		<div class="link" v-link="{name: 'page', params: {active_id: 123}}">page</div>
	</div>
	
</template>

<script>
	
</script>