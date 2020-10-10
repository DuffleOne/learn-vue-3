<template>
	<div>
		<button @click="increment(10)">Increment</button>
		<button @click="decrement(10)">Decrement</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'CounterController',
	methods: {
		...mapActions([
			'increment',
			'decrement',
		])
	},
}
</script>
