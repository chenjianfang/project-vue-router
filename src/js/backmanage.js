import router from './router.js';
import common from './vue-component/common.vue';
const app = new Vue({
  router,
  el:"#app",
  data:{
  	message:"hello manage",
  	arr:[4,5],
  	navlink:"",
    activeBool:[],
    sideMove:false,
    sidehidebox:false
  },
  components:{
  	common
  },
  methods:{
    /*导航选中*/
  	navHead(idx){
      const that = this;
      console.log(idx);
      that.activeBool = that.activeBool.map( (value,index) => value = index === idx ? true : false);
      console.log(that.activeBool)
    },
    /*侧边栏隐藏*/
    moveTranslate(){
      this.sideMove = !this.sideMove;
      setTimeout(()=> {
        this.sidehidebox = !this.sidehidebox;
      },300);
    }
  },
  created:function(){
  	let that = this;
  	//请求首屏数据
  	fetch('/lib/json/member/loadTopFunc.do.json')
  		.then(function(response){
  			return response.json()
  		}).then(function(json){
  			that.navlink = json;
  			json.map(function(value,index){
  				that.navlink[index].funHref = value.funHref.replace(/frame/,"");
          that.activeBool.push(false);
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
