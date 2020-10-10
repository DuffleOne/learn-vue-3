<template>
  <div class="counter">
    <Counter :start-at="0" :interval-jump="5" />
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from "@/components/Counter.vue";

export default {
  name: "CounterPage",
  components: {
    Counter,
  },
};
</script>
