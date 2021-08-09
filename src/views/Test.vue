<template>
  <div class="Test">
    <h1>This is an Test page</h1>
    <button v-on:click="setCounter">SetCounter</button>
    {{getCount}}
  </div>
</template>

<script>
import {getState} from '../vuex/getter'
export default {
  computed:{
    ...getState,
  },
  methods:{
    setCounter:function(){
      this.$store.dispatch('setCount');
    }
  }
};
</script>