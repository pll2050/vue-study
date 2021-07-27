<template>
  <div>
    <div>
      <button @click="onclickCommitEvent">Click</button>
    </div>
    <div>
      {{ $store.state.count }}
    </div>
    <div v-for="user in $store.state.userinfo" v-bind:key="user.id">
      <div class="userinfo" style="width:10%">
        {{ user.id }}
      </div>
      <div class="userinfo" style="width:90%">
        {{ user.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickEvent: function () {
      //   this.$store.commit("increment");
    },
    onclickCommitEvent() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
};
</script>

<style>
.userinfo{
    float:left;
}
</style>