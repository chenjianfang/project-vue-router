<template>
		<maintable v-bind:resultdata="resultdata"
				   v-bind:menu="menu"></maintable>
</template>

<script>
	import maintable from './maintable.vue'
	export default{
		data(){
			return{
				resultdata:"",
				menu:[
					"登录名称",
					"真实姓名",
					"会员性质",
					"会员状态",
					"邮箱",
					"联系方式",
					"最近登录时间",
					"最近登录方式",
					"注册时间",
					"操作"
				]
			}
		},
		components:{
			maintable
		},
		created(){
			const that = this;
			fetch('/lib/json/main/main.json')
				.then(function(response){
					return response.json()
				}).then(function(json){
					that.resultdata = json;
				}).catch(function(ex){
					console.log(ex);
				})
		}

	}
</script>
