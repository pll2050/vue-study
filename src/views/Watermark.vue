<template>
    <div>
        <!-- <img class="img" src="@/assets/test.jpg" /> -->
        <!-- <img class="img" id="myimage" style="border: 1px solid black" />
        <canvas id="mycanvas" style="border: 1px solid black" /> -->
        <img id="myimage" :src="img" />
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
        console.log(this.addWaterMark("/test.jpg"));
        // this.img = this.addWaterMark("/test.jpg");
    },
    methods: {
        async addWaterMark(img) {
            return await this.mergeWaterImage(img);
        },
        mergeWaterImage(img) {
            return new Promise((resolve) => {
                // var canvas = document.getElementById("canvas");
                var canvas = document.createElement("canvas");
                var context = canvas.getContext("2d");
                var imageObj = new Image();
                var waterObj = new Image();
                imageObj.src = img;
                waterObj.src = "/water_marks.png";

                imageObj.onload = function () {
                    canvas.width = this.width;
                    canvas.height = this.height;

                    context.drawImage(
                        imageObj,
                        0,
                        0,
                        canvas.width,
                        canvas.height
                    );
                    for (var axisY = 0; axisY <= 5; axisY++) {
                    for (var axis = 0; axis <= 5; axis++) {
                        context.drawImage(waterObj, 300 * axis, 260*axisY);
                    }
                    }
                    var image = document.getElementById("myimage");
                    image.src = canvas.toDataURL();
                    resolve(canvas.toDataURL());
                };
            });
        },
    },
};
</script>
<style>
.img {
    width: 100%;
}
</style>