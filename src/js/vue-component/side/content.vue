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
				router:[]
			}
		},
		created(){
			const that = this;
			fetch('/lib/json/content/loadLeftFunc.do.json')
			  .then(function(response) {
			    return response.json()
			  }).then(function(json) {
			    console.log('parsed json', json)
			    that.items = json;
			    json.map( (value) => {
			    	that.router.push(value.funHref.replace("/","_"))
			    });
			  }).catch(function(ex) {
			    console.log('parsing failed', ex)
			  })
		}
	}
</script>
