<style>
	
</style>

<template>
	<div>
		<h2>LIST</h2>
	</div>
</template>

<script>
export default {
	events: {
	  'broadcast1' () {
	    console.log('broadcast1_test')	
	  },
	  'broadcast2' (msg) {
	    console.log(msg)	
	  }
	},
	ready () {

		setTimeout(() => {
			/*$broadcast沿着父链派发自定义事件（定义在父链中的events中的方法），第一个参数为匹配字符串，匹配符合就执行自定义中相应的匹配方法*/
			this.$dispatch('dispatch1');
			this.$dispatch('dispatch2', 'd222');
		}, 500)
	}
}
</script>