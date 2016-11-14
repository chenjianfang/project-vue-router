<template>
	<div>
		<div>
			<headervue>
				<slot name="headstart"></slot>
				<navvue></navvue>
				<slot name="headend"></slot>
			</headervue>

		</div>
		<div>
			<footervue></footervue>

		</div>
	</div>
</template>

<script>
	import headervue from './header.vue';
	import footervue from './footer.vue';
	import navvue from './nav.vue';
	export default{
		data(){
			return{

			}
		},
		components:{
			headervue,
			footervue,
			navvue
		}
	}
</script>
