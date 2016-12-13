<template>
	<div class="main-table">
		<ul class="menu-box clearfix">
			<li class="main-menu-item" v-for="(item,index) in menu">
				<span class="main-menu-head table-item-common">{{item}}</span>
				<span class="main-detail-msg table-item-common" v-for="value in tempArr[index]">{{value}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tempArr:""
			}
		},
		props:['resultdata','menu'],
		created(){

		},
		watch:{
			resultdata:function(val,oldVal){
				const that = this;
				let tempArr = [];
				console.log(val,oldVal);
				that.resultdata = val;
				that.resultdata.map((value,index) => {
					let i = 0;
					var item;
					for(item in value){
						if(Object.prototype.toString.call(tempArr[i]) !=='[object Array]'){
							tempArr[i] = [];
						}
						tempArr[i].push(value[item]);
						i++;
					}
				});
				console.log(tempArr)
				that.tempArr = tempArr;
			}
		},
		computed:{
			
		}
	}
</script>