/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _router = __webpack_require__(2);

	var _router2 = _interopRequireDefault(_router);

	var _common = __webpack_require__(15);

	var _common2 = _interopRequireDefault(_common);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = new Vue({
	  router: _router2.default,
	  el: "#app",
	  data: {
	    message: "hello manage",
	    arr: [4, 5],
	    navlink: ""
	  },
	  components: {
	    common: _common2.default
	  },
	  method: {
	    handle: function handle() {
	      console.log(this);
	      this.arr.map(function (value) {
	        console.log(this);
	      });
	    }
	  },
	  created: function created() {
	    var that = this;
	    //请求首屏数据
	    fetch('/lib/json/member/loadTopFunc.do.json').then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      console.log(json);
	      that.navlink = json;
	      json.map(function (value, index) {
	        that.navlink[index].funHref = value.funHref.replace(/frame/, "");
	      });
	    }).catch(function (ex) {
	      console.log(ex);
	    });
	  },
	  computed: {
	    reverseMessage: function reverseMessage() {
	      return this.message.split('').reverse().join("");
	    }
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _memberManagement = __webpack_require__(3);

	var _memberManagement2 = _interopRequireDefault(_memberManagement);

	var _transaction = __webpack_require__(6);

	var _transaction2 = _interopRequireDefault(_transaction);

	var _membermain = __webpack_require__(9);

	var _membermain2 = _interopRequireDefault(_membermain);

	var _transactionmain = __webpack_require__(12);

	var _transactionmain2 = _interopRequireDefault(_transactionmain);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*主内容*/
	/*侧边栏*/
	// import member from './vue-component/side/member.vue';
	Vue.use(VueRouter);
	/*侧边栏路由*/
	var routes = [{
		path: '/member1', components: {
			sidelayout: _memberManagement2.default,
			main: _membermain2.default
		}
	}, {
		path: '/member2', components: {
			sidelayout: _memberManagement2.default,
			main: _membermain2.default
		}
	}, {
		path: '/member3', components: {
			sidelayout: _transaction2.default
		}
	}, {
		path: '/member4', components: {
			sidelayout: _transaction2.default
		}
	}, {
		path: '/member5', components: {
			sidelayout: _transaction2.default
		}
	}];

	/*主内容路由*/
	var mainroutes = [{
		path: '/', components: {
			sidelayout: _memberManagement2.default,
			main: _membermain2.default
		}
	}, {
		path: '/huiyuan_main.do', components: {
			sidelayout: _memberManagement2.default,
			main: _membermain2.default
		}
	}, {
		path: '/rongzi_main.do', components: {
			sidelayout: _memberManagement2.default,
			main: _transactionmain2.default
		}
	}, {
		path: '/jiaoyi_main.do', components: {
			sidelayout: _memberManagement2.default,
			main: _transactionmain2.default
		}
	}, {
		path: '/neirong_main.do', components: {
			sidelayout: _memberManagement2.default,
			main: _transactionmain2.default
		}
	}, {
		path: '/rongzi_main.do', components: {
			sidelayout: _memberManagement2.default,
			main: _transactionmain2.default
		}
	}, {
		path: '/activity_main.do', components: {
			sidelayout: _memberManagement2.default,
			main: _transactionmain2.default
		}
	}, {
		path: '/sys_main.do', components: {
			sidelayout: _memberManagement2.default,
			main: _transactionmain2.default
		}
	}, {
		path: '/vipManage_main.do', components: {
			sidelayout: _memberManagement2.default,
			main: _transactionmain2.default
		}
	}, {
		path: '/capital_main.do', components: {
			sidelayout: _memberManagement2.default,
			main: _transactionmain2.default
		}
	}, {
		path: '/report_main.do', components: {
			sidelayout: _memberManagement2.default,
			main: _transactionmain2.default
		}
	}, {
		path: '/weixin_main.do', components: {
			sidelayout: _memberManagement2.default,
			main: _transactionmain2.default
		}
	}, {
		path: '/monitor_main.do', components: {
			sidelayout: _memberManagement2.default,
			main: _transactionmain2.default
		}
	}];
	routes = routes.concat(mainroutes);
	console.log(routes);
	var router = new VueRouter({
		routes: routes
	});

	exports.default = router;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(4)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\vue-component\\side\\member-management.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(5)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-89f00c8c/member-management.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {
				items: [],
				router: ["member1", "member2", "member3", "member4", "member5"]
			};
		},

		methods: {},
		created: function created() {
			var that = this;
			fetch('/lib/json/member/loadLeftFunc.do.json').then(function (response) {
				return response.json();
			}).then(function (json) {
				console.log(json);
				that.items = json;
				json.map(function (value, index) {
					var temp = value.funHref.replace(/^\//, "");
					that.router.push(temp.split("/")[0]);
				});
				console.log(that.router);
			}).catch(function (ex) {
				console.log(ex);
			});
		}
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "\n<ul>\n\t<li v-for=\"(item,index) in items\" class=\"side-lists\">\n\t\t<router-link class=\"side-list-item\" v-bind:to=\"router[index]\">{{item.name}}</router-link>\n\t</li>\n</ul>\n";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(7)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\vue-component\\side\\transaction.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(8)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-ca5e877c/transaction.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {};
		}
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n\t这是第二个菜单栏\n</div>\n";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(10)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\vue-component\\main\\membermain.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(11)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1976e706/membermain.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {};
		}
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n这是第二个主要\n</div>\n";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(13)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\vue-component\\main\\transactionmain.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(14)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0dbe7bdd/transactionmain.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {};
		}
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n这是第一个主要\n</div>\n";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(16)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\vue-component\\common.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(17)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-47393a94/common.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {};
		}
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n\t\n</div>\n";

/***/ }
/******/ ]);