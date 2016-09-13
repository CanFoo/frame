<style>
	
</style>

<template>
	<div>
		<h2>LIST</h2>
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>

	</div>
</template>

<script>
module.exports = {
	data: function(){
		this.$root.appfn("list"); //调取根实例（app.vue）上的appfn的方法
		this.$parent.homefn("list"); //调取根实例（home.vue）上的appfn的方法
		return {

		}
	},
	methods: {
		listfn: function(){
        	console.log("list");
      	}
	}
}
</script>