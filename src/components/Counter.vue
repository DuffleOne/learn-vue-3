<template>
	<div>
		Counter: {{ $store.state.count }}
		<button @click="increment(10)">Increment</button>
		<button @click="decrement(10)">Decrement</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'Counter',
	props: {
		startAt: Number,
		intervalJump: Number,
	},
	methods: {
		...mapActions([
			'increment',
			'decrement',
		])
	},
	mounted() {
		this.$store.state.count = this.startAt;

		setInterval(() => {
			this.$store.state.count += this.intervalJump;
		}, 1000);
	},
}
</script>
