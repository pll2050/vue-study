<template>
    <div>
        <button @click="isShow1 = !isShow1">Show</button>
        <button @click="isShow2 = !isShow2">Show</button>
        <button @click="isShow3 = !isShow3">Show</button>
        <transition name="fade">
            <div class="tab" v-if="isShow1">test 1</div>
        </transition>
        <transition name="fade">
            <div class="tab" v-if="isShow2">test 2</div>
        </transition>
        <transition name="fade">
            <div class="tab" v-if="isShow3">test 3</div>
        </transition>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            isShow1: false,
            isShow2: false,
            isShow3: false,
        };
    },
    updated: function () {},
};
</script>

<style>
.tab {
    width: 500px;
    height: 100px;
    border: 1px solid black;
}
.fade-enter-active,
.fade-leave-active {
    /* transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1); */
    /* opacity: 1; */
    transition: opacity 0.5s;
    opacity: 0;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateY(10px);
    opacity: 0;
}
</style>