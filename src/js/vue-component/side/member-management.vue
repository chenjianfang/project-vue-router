<template>
	<ul>
		<li v-for="(item,index) in items" class="side-lists sidetext-move">
			<router-link class="side-list-item" v-bind:to="router[index]">{{item.name}}</router-link>
		</li>
	</ul>
</template>

<script>
	export default{
		data(){
			return{
				items:[],
				router:[]
			}
		},
		methods:{

		},
		created(){
			let that = this;
			fetch('/lib/json/member/loadLeftFunc.do.json')
				.then(function(response){
					return response.json()
				}).then(function(json){
					console.log(json);
					that.items = json;
					json.map( (value) => {
						that.router.push(value.funHref.replace(/\//g,"_"));
					});
					console.log(that.router);
				}).catch(function(ex){
					console.log(ex);
				})
		}
	}
</script>
