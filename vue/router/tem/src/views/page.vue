<style>
	.link {
		color: blue;
	}
</style>

<template>
	<div>
		<h1>PAGE</h1>
		<div class="link" v-link="{name: 'home'}">back</div>
	</div>
</template>

<script>
module.exports = {
	route: {
		activate: function(transition) {
			console.log("page_activate");
			transition.next();
		},
		deactivate: function(transition) {
			console.log("page_deactivate");
			transition.next();
		},
		canActivate: function(transition) {
			console.log("page_canActivate");
			// transition.abort();
			transition.next();
		},
		canDeactivate: function(transition) {
			console.log("page_canDeactivate");
			transition.next();
		},
		canReuse: function(transition) {
			console.log("page_canReuse");
			transition.next();
		},
		data: function(transition) {
			console.log("page_data");
			// transition.abort();
			transition.next();
			
		}
	}
}
</script>