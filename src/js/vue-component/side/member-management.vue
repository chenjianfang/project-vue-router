<template>
	<ul>
		<li v-for="(item,index) in items" class="side-lists">
			<router-link class="side-list-item" v-bind:to="router[index]">{{item.name}}</router-link>
		</li>
	</ul>
</template>

<script>
	export default{
		data(){
			return{
				items:[],
				router:["member1","member2","member3","member4","member5"]
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
					json.map(function(value,index){
						let temp = value.funHref.replace(/^\//,"");
						that.router.push(temp.split("/")[0]);
					})
					console.log(that.router);
				}).catch(function(ex){
					console.log(ex);
				})
		}
	}
</script>
