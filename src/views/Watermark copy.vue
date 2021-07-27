<template>
    <div>
        <img class="img" src="@/assets/test.jpg" />
    </div>
</template>
<script>
import watermark from "../helper/watermark.js";
export default {
    mounted: function () {
        console.log(watermark.set("userId"));
    },
};
</script>
<style>
.img {
    width: 100%;
}
</style>