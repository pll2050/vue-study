<template>
  <div class="Test">
    <h1>This is an Test page</h1>
    <button @click="commit">test</button>
    {{ $store.state.userinfo }}
  </div>
</template>

<script>
export default {
  created() {},
  methods: {
    commit() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
};
</script>