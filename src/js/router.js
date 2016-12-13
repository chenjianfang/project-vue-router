/*侧边栏*/
// import member from './vue-component/side/member.vue';
import memberManagement from './vue-component/side/member-management.vue';
import rongzi from './vue-component/side/rongzi.vue';
import jiaoyi from './vue-component/side/jiaoyi.vue';
import content from './vue-component/side/content.vue';
import yingxiao from './vue-component/side/yingxiao.vue';
import system from './vue-component/side/system.vue';
import vip from './vue-component/side/vip.vue';
import zijin from './vue-component/side/zijin.vue';
import analysis from './vue-component/side/analysis.vue';
import weixin from './vue-component/side/weixin.vue';
import jiankong from './vue-component/side/jiankong.vue';

/*主内容*/
import membermain from './vue-component/main/membermain.vue';
import transactionmain from './vue-component/main/transactionmain.vue';


Vue.use(VueRouter);
/*侧边栏路由*/

let routes = [
	{
		path:'/_registerYbl_v_list.do',components:{
			sidelayout:memberManagement,
			main: membermain
		}
	},
	{
		path:'/guaranteeYbl_v_list.do',components:{
			sidelayout:memberManagement,
			main: membermain
		}
	},
	{
		path:'/contractYbl_v_list.do',components:{
			sidelayout:memberManagement,
			main: membermain
		}
	},
	{
		path:'/contractYbl_v_queryCtTemplate.do',components:{
			sidelayout:memberManagement,
			main: membermain
		}
	},
	{
		path:'/yblOperateLog_v_list.do',components:{
			sidelayout:memberManagement,
			main: membermain
		}
	}
];
let rongziArr = [
	{
		path:'/fundIdeaYbl_v_list.do',
		components:{
			sidelayout: rongzi,
			main:transactionmain
		}
	},
	{
		path:'/fundapplyYbl_v_list.do',
		components:{
			sidelayout: rongzi,
			main:transactionmain
		}
	},
	{
		path:'/templateYbl_v_list.do',
		components:{
			sidelayout: rongzi,
			main:transactionmain
		}
	}
];
let jiaoyiArr = [
	{
		path:'/transactionYbl_v_list.do',
		components:{
			sidelayout:jiaoyi,
			main:transactionmain
		}
	},
	{
		path:'/productYbl_v_list.do',
		components:{
			sidelayout:jiaoyi,
			main:transactionmain
		}
	},
	{
		path:'/yblMerchantBil_v_list.do',
		components:{
			sidelayout:jiaoyi,
			main:transactionmain
		}
	},
	{
		path:'/yblProductRate_v_list.do',
		components:{
			sidelayout:jiaoyi,
			main:transactionmain
		}
	}
]
let contentArr = [
	{
		path: '/category_v_list.do',
		components:{
			sidelayout:content,
			main:transactionmain
		}
	},
	{
		path: '/article_v_list.do',
		components:{
			sidelayout:content,
			main:transactionmain
		}
	},
	{
		path: '/msgTemplateYbl_v_list.do',
		components:{
			sidelayout:content,
			main:transactionmain
		}
	},
	{
		path: '/clientinfo_v_list.do',
		components:{
			sidelayout:content,
			main:transactionmain
		}
	},
	{
		path: '/advertisement_v_list.do',
		components:{
			sidelayout:content,
			main:transactionmain
		}
	},
	{
		path: '/msgManagement_v_list.do',
		components:{
			sidelayout:content,
			main:transactionmain
		}
	},
	{
		path: '/live_v_list.do',
		components:{
			sidelayout:content,
			main:transactionmain
		}
	}
];
let yingxiaoArr = [
	{
		path: '/yblActivity_v_list.do',
		components:{
			sidelayout:yingxiao,
			main:transactionmain
		}
	},
	{
		path: '/yblActivityRule_v_list.do',
		components:{
			sidelayout:yingxiao,
			main:transactionmain
		}
	},
	{
		path: '/yblActivityTotle_v_list.do',
		components:{
			sidelayout:yingxiao,
			main:transactionmain
		}
	},
	{
		path: '/yblActivityGift_v_list.do',
		components:{
			sidelayout:yingxiao,
			main:transactionmain
		}
	}
];
let systemArr = [
	{
		path:'/admin_native_v_list.do',
		components:{
			sidelayout:system,
			main:transactionmain
		}
	},
	{
		path:'/sys_v_list.do',
		components:{
			sidelayout:system,
			main:transactionmain
		}
	},
	{
		path:'/log_v_list_operating.do',
		components:{
			sidelayout:system,
			main:transactionmain
		}
	},
	{
		path:'/basedata_v_list.do',
		components:{
			sidelayout:system,
			main:transactionmain
		}
	},
	{
		path:'/sysfun_fv_list.do',
		components:{
			sidelayout:system,
			main:transactionmain
		}
	}
];
let vipArr = [
	{
		path:'/yblVipManageAct_get_elephantGolds.do',
		components:{
			sidelayout:vip,
			main:transactionmain
		}
	},
	{
		path:'/yblVipManageAct_get_userInterests.do',
		components:{
			sidelayout:vip,
			main:transactionmain
		}
	},
	{
		path:'/yblVipManageAct_get_vipUserGoldsInfo.do',
		components:{
			sidelayout:vip,
			main:transactionmain
		}
	},
	{
		path:'/yblVipManageAct_get_vipGradeList.do',
		components:{
			sidelayout:vip,
			main:transactionmain
		}
	},
	{
		path:'/yblGoods_v_list.do',
		components:{
			sidelayout:vip,
			main:transactionmain
		}
	},
	{
		path:'/orders_v_list.do',
		components:{
			sidelayout:vip,
			main:transactionmain
		}
	},
	{
		path:'/yblGame_v_list.do',
		components:{
			sidelayout:vip,
			main:transactionmain
		}
	},
	{
		path:'/yblgameplay_v_list.do',
		components:{
			sidelayout:vip,
			main:transactionmain
		}
	}
];
let zijinArr = [
	{
		path:'/capital_v_list.do',
		components:{
			sidelayout:zijin,
			main:transactionmain
		}
	},
	{
		path:'/capitalAmount_v_list.do',
		components:{
			sidelayout:zijin,
			main:transactionmain
		}
	},
	{
		path:'/settlement_v_list.do',
		components:{
			sidelayout:zijin,
			main:transactionmain
		}
	},
	{
		path:'/accItem_v_list.do',
		components:{
			sidelayout:zijin,
			main:transactionmain
		}
	},
	{
		path:'/yblCheckDaily_v_list.do',
		components:{
			sidelayout:zijin,
			main:transactionmain
		}
	},
	{
		path:'/yblAccount_v_list.do',
		components:{
			sidelayout:zijin,
			main:transactionmain
		}
	}
];
let analysisArr = [
	{
		path:'/reportUser_v_user_report.do',
		components:{
			sidelayout:analysis,
			main:transactionmain
		}
	},
	{
		path:'/reportInvest_v_investReport.do',
		components:{
			sidelayout:analysis,
			main:transactionmain
		}
	},
	{
		path:'/reportPro_v_projectAnalyze.do',
		components:{
			sidelayout:analysis,
			main:transactionmain
		}
	},
	{
		path:'/reportFinancing_v_list.do',
		components:{
			sidelayout:analysis,
			main:transactionmain
		}
	},
	{
		path:'/reportDaily_v_list.do',
		components:{
			sidelayout:analysis,
			main:transactionmain
		}
	},
	{
		path:'/reportUserIncome_v_userIncome.do',
		components:{
			sidelayout:analysis,
			main:transactionmain
		}
	},
	{
		path:'/report_v_list.do',
		components:{
			sidelayout:analysis,
			main:transactionmain
		}
	}
];
let weixinArr = [
	{
		path:'/yblWxMenu_v_list.do',
		components:{
			sidelayout:weixin,
			main:transactionmain
		}
	},
	{
		path:'/yblWxRule_v_list.do',
		components:{
			sidelayout:weixin,
			main:transactionmain
		}
	}
];
let jiankongArr = [
	{
		path:'/yblTaskLog_v_list.do',
		components:{
			sidelayout:jiankong,
			main:transactionmain
		}
	}
]
/*主内容路由*/
let mainroutes = [
	{
		path:'/',
		components:{
			sidelayout:memberManagement,
			main: membermain
		}
	},
	{
		path:'/huiyuan_main.do',
		components:{
			sidelayout:memberManagement,
			main: membermain
		}
	},
	{
		path:'/rongzi_main.do',
		components:{
			sidelayout:rongzi,
			main:transactionmain
		}
	},
	{
		path:'/jiaoyi_main.do',
		components:{
			sidelayout:jiaoyi,
			main:transactionmain
		}
	},
	{
		path:'/neirong_main.do',
		components:{
			sidelayout:content,
			main:transactionmain
		}
	},
	{
		path:'/activity_main.do',
		components:{
			sidelayout:yingxiao,
			main:transactionmain
		}
	},
	{
		path:'/sys_main.do',
		components:{
			sidelayout:system,
			main:transactionmain
		}
	},
	{
		path:'/vipManage_main.do',
		components:{
			sidelayout:vip,
			main:transactionmain
		}
	},
	{
		path:'/capital_main.do',
		components:{
			sidelayout:zijin,
			main:transactionmain
		}
	},
	{
		path:'/report_main.do',
		components:{
			sidelayout:analysis,
			main:transactionmain
		}
	},
	{
		path:'/weixin_main.do',components:{
			sidelayout:weixin,
			main:transactionmain
		}
	},
	{
		path:'/monitor_main.do',components:{
			sidelayout:jiankong,
			main:transactionmain
		}
	}
];
routes = routes.concat(mainroutes,rongziArr,jiaoyiArr,contentArr,yingxiaoArr,systemArr,vipArr,zijinArr,analysisArr,weixinArr,jiankongArr);
const router = new VueRouter({
	routes
});

export default router;