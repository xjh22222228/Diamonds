import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		usersInfo: {
			tel: '',
			id: '',
			money: 0,
			avatar: '../assets/images/avatar2.jpg',
			tixian: [],
		},
		record: [],
	},
	mutations: {
		login (state, payload) {
			state.usersInfo = payload;
		},
		tixian (state, payload) {
			state.usersInfo.tixian.push(payload);
			state.usersInfo.money = (Number(state.usersInfo.money).toFixed(2) - payload.money).toFixed(2);
			state.record.record.push({
				tel: payload.tel,
				money: payload.money,
				time: payload.time,
			});
			localStorage.user = JSON.stringify(state.usersInfo);
		},
	},
	actions: {
		record ({dispatch, state}, payload) {
			state.record = {
					"operation": [
						{
							"link": "/home/wallet",
							"icon": "&#xe602;",
							"name": "我的钱包",
							"id": 2
						},
						{
							"link": "/home/help",
							"icon": "&#xe613;",
							"name": "新手指南",
							"id": 3
						},
						{
							"link": "/home/journal",
							"icon": "&#xe692;",
							"name": "收益日志",
							"id": 4
						},
						{
							"link": "/home/fans",
							"icon": "&#xe61a;",
							"name": "粉丝收益",
							"id": 5
						},
						{
							"link": "/home/makemoney",
							"icon": "&#xe609;",
							"name": "收徒赚钱",
							"id": 6
						},
						{
							"link": "/home/withdrawals",
							"icon": "&#xe62f;",
							"name": "提现记录",
							"id": 8
						}
					],
					"record": [
						{
							"tel": 13563236231,
							"money": 33.33,
							"time": 1498317562333
						},
						{
							"tel": 13169656322,
							"money": 26,
							"time": 1498359900578
						},
						{
							"tel": 13626546333,
							"money": 90,
							"time": 1498317162333
						},
						{
							"tel": 13856978632,
							"money": 66.66,
							"time": 1498317362333
						},
						{
							"tel": 13256963258,
							"money": 88.88,
							"time": 1498327262333
						},
						{
							"tel": 13269632587,
							"money": 33.33,
							"time": 1498315562333
						},
						{
							"tel": 13269632587,
							"money": 22.20,
							"time": 1498350900578
						},
						{
							"tel": 13269784632,
							"money": 70,
							"time": 1498317112333
						},
						{
							"tel": 13025697463,
							"money": 50.22,
							"time": 1498317362233
						},
						{
							"tel": 13025976523,
							"money": 10,
							"time": 1498317262033
						}
					]
			};
		}
	},
})