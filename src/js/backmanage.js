import router from './router.js';
import common from './vue-component/common.vue';
const app = new Vue({
  router,
  el:"#app",
  data:{
  	message:"hello manage",
  	arr:[4,5],
  	navlink:""
  },
  components:{
  	common
  },
  method:{
  	handle:function(){
  		console.log(this);
  		this.arr.map(function(value){
  			console.log(this);
  		});
  	}
  },
  created:function(){
  	let that = this;
  	//请求首屏数据
  	fetch('/lib/json/member/loadTopFunc.do.json')
  		.then(function(response){
  			return response.json()
  		}).then(function(json){
  			console.log(json);
  			that.navlink = json;
  			json.map(function(value,index){
  				that.navlink[index].funHref = value.funHref.replace(/frame/,"")
  			});
  			
  		}).catch(function(ex){
  			console.log(ex);
  		})
  	
  },
  computed:{
  	reverseMessage(){
  		return this.message.split('').reverse().join("");
  	}
  }
})
