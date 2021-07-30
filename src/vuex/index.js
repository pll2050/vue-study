import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        userinfo:[],
    },
    mutations: {
        increment(state) {
            state.count++
        },
        setUserInfo(state,data) {
            // state.count++
            state.userinfo = data;
        }
    },
    actions: {
        getUserInfo: function (context) {
            axios
                .get("https://jsonplaceholder.typicode.com/posts")
                .then(function (response) {
                    // this.userinfo = response.data;
                    context.commit('setUserInfo',response.data)
                    // console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        }
    }
})

export default store