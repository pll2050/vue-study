<template>
    <div>
        <!-- <img class="img" src="@/assets/test.jpg" /> -->
        <img class="img" id="myimage" style="border: 1px solid black" />
        <canvas id="mycanvas" style="border: 1px solid black" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            img: "",
        };
    },
    mounted: function () {
        // console.log(watermark.set("userId 123"));
        this.img = this.addWaterMark();
    },
    methods: {
        addWaterMark() {
            var canvas = document.getElementById("mycanvas");
            canvas.width = 600;
            canvas.height = 600;
            var context = canvas.getContext("2d");

            // 새로운 이미지 객체를 만듬
            var img = new Image();
                img.src = "/test.jpg";
            img.onload = function () {
                context.drawImage(img, 0, 0);
            };
            // 이미지 URL
            context.globalCompositeOperation = "source-over";
            var image = document.getElementById('myimage');
            image.src= canvas.toDataURL();


            // var canvas = document.getElementById("mycanvas");
            // canvas.width = 300;
            // canvas.height = 250;
            // var context = canvas.getContext("2d");

            // // 첫 번째 도형
            // context.fillStyle = "red";
            // context.fillRect(50, 50, 100, 100);
            // // 두 도형 병합
            // // source-over
            // context.globalCompositeOperation = "source-over";
            // // 두 번째 도형
            // context.fillStyle = "blue";
            // context.beginPath();
            // context.arc(130, 120, 50, 0, 2 * Math.PI);
            // context.fill();
            // var image = document.getElementById('myimage');
            // image.src= canvas.toDataURL();
        },
    },
};
</script>
<style>
.img {
    width: 100%;
}
</style>