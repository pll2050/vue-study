<template>
  <div>
    <button @click="sortByIdDESC">sortByIdDESC</button>
    <button @click="sortByIdASC">sortByIdASC</button>
    <button @click="finditem">finditem</button>

    <div v-for="item in desc" v-bind:key="item.id">
        {{item}}
    </div>
  </div>
</template>

<script>
// import VueLodash from 'vue-lodash'
import _ from "lodash";

export default {
  data: function () {
    return {
      items: [
        { id: 1, name: "test1" },
        { id: 2, name: "test2" },
        { id: 3, name: "test3" },
        { id: 3, name: "test4" },
        { id: 5, name: "test5" },
      ],
      desc: [],
      users: [
        { user: "barney", age: 36, active: true },
        { user: "fred", age: 40, active: false },
        { user: "pebbles", age: 1, active: true },
      ],
    };
  },
  methods: {
    comp: function (val1, val2) {
      return val1.id > val2.id;
    },

    sortByIdDESC: function () {
      console.log("id");
      this.desc = _.orderBy(this.items, ["id"], ["desc"]);
    },
    sortByIdASC: function () {
      console.log("id");
      this.desc = _.orderBy(this.items, ["id"], ["asc"]);
    },
    finditem: function () {
      this.desc = _.filter(this.items, ["id", 3]);
    },
  },
};
</script>