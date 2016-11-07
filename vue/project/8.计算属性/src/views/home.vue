<style>
</style>

<template>

	<!-- 外层必须加一个单元素（这里是div），否则会报错，参见http://cn.vuejs.org/guide/components.html#片断实例 -->
	<div>
		
		<div v-if="$loadingRouteData" class="loading">正在加载...</div>
		<div v-if="!$loadingRouteData" class="loading">
			<div>{{ message }}</div>

			<!-- 必须在模板里计算属性的变量，否则这个变量对应的方法不执行（有点奇怪） -->
			<div>{{ addMessage }}</div>
			<button :style="{background: 'lightblue', color: '#fff'}" @click="add">加1</button>
		</div>
	</div>
</template>

<script>
//关于computed与watch的区别详见 http://cn.vuejs.org/v2/guide/computed.html#计算属性-vs-Watched-Property
module.exports = {
	data() {
		return {
			message: 1
		}
	},
	methods: {
		add() {
			this.message++;
		}
	},
	computed: {
		//当this.message变化时，会执行此函数。但是必须将addMessage变量放在模版中，否则不执行（不知道这是不是坑）
		addMessage() {
			console.log('computed', this.message)
			return this.message
		}
	},
	watch: {
		//当message值改变的话，来执行此函数
		message() {
			console.log('watch', this.message)
		}
	}

}
</script>