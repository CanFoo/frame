<style>
	
</style>

<template>
	<div>
		<h2>LIST</h2>
		<h2>prop: {{ redata }}</h2>
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>
		<div class="btn" @click="btn()">listbtn</div>
	</div>
</template>

<script>
module.exports = {
	data: function(){
		return {

		}
	},
	props: {
		redata: {
			type: String,
			default: "hello"
		}
	},
	methods: {
		btn: function(){
        	this.redata = "yes";
      	}
	}
}
</script>