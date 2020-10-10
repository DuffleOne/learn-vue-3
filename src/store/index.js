import { createStore } from 'vuex'

export default createStore({
	state() {
		return {
			count: 0,
		};
	},
	mutations: {
		modifyCount(state, payload) {
			state.count += payload.amount;
		},
	},
	actions: {
		increment(context, amount) {
			context.commit({
				type: 'modifyCount',
				amount: Math.abs(amount),
			});
		},
		decrement(context, amount) {
			context.commit({
				type: 'modifyCount',
				amount: -amount,
			});
		},
	},
	modules: {
	}
})
