<template>
  <div>
    <div>
      <button @click="onClickEvent">Click</button>
    </div>
    <div>
      {{ $store.state.userinfo }}
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickEvent: function () {
    //   this.$store.commit("increment");
      
    },
  },
};
</script>