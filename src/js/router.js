/*侧边栏*/
// import member from './vue-component/side/member.vue';
import memberManagement from './vue-component/side/member-management.vue';
import transaction from './vue-component/side/transaction.vue';

/*主内容*/
import membermain from './vue-component/main/membermain.vue';
import transactionmain from './vue-component/main/transactionmain.vue';


Vue.use(VueRouter);
/*侧边栏路由*/
let routes = [
	{
		path:'/member1',components:{
			sidelayout:memberManagement,
			main: membermain
		}
	},
	{
		path:'/member2',components:{
			sidelayout:memberManagement,
			main: membermain
		}
	},
	{
		path:'/member3',components:{
			sidelayout:transaction
		}
	},
	{
		path:'/member4',components:{
			sidelayout:transaction
		}
	},
	{
		path:'/member5',components:{
			sidelayout:transaction
		}
	}
];

/*主内容路由*/
let mainroutes = [
	{
		path:'/',components:{
			sidelayout:memberManagement,
			main: membermain
		}
	},
	{
		path:'/huiyuan_main.do',components:{
			sidelayout:memberManagement,
			main: membermain
		}
	},
	{
		path:'/rongzi_main.do',components:{
			sidelayout:memberManagement,
			main:transactionmain
		}
	},
	{
		path:'/jiaoyi_main.do',components:{
			sidelayout:memberManagement,
			main:transactionmain
		}
	},
	{
		path:'/neirong_main.do',components:{
			sidelayout:memberManagement,
			main:transactionmain
		}
	},
	{
		path:'/rongzi_main.do',components:{
			sidelayout:memberManagement,
			main:transactionmain
		}
	},
	{
		path:'/activity_main.do',components:{
			sidelayout:memberManagement,
			main:transactionmain
		}
	},
	{
		path:'/sys_main.do',components:{
			sidelayout:memberManagement,
			main:transactionmain
		}
	},
	{
		path:'/vipManage_main.do',components:{
			sidelayout:memberManagement,
			main:transactionmain
		}
	},
	{
		path:'/capital_main.do',components:{
			sidelayout:memberManagement,
			main:transactionmain
		}
	},
	{
		path:'/report_main.do',components:{
			sidelayout:memberManagement,
			main:transactionmain
		}
	},
	{
		path:'/weixin_main.do',components:{
			sidelayout:memberManagement,
			main:transactionmain
		}
	},
	{
		path:'/monitor_main.do',components:{
			sidelayout:memberManagement,
			main:transactionmain
		}
	}
];
routes = routes.concat(mainroutes);
console.log(routes);
const router = new VueRouter({
	routes
});

export default router;