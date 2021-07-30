'use strict'

let watermark = {}

let addWaterMark = (img) => {
    // var canvas = document.getElementById("canvas");
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    var imageObj = new Image();
    imageObj.src = img;
    var waterObj = new Image();
    waterObj.src = '/water_marks.png';

    console.log(" width: ", imageObj.naturalWidth, " height: ", imageObj.naturalHeight);

    imageObj.onload = function () {
        canvas.width = this.width;
        canvas.height = this.height;
        context.drawImage(imageObj, 0, 0, canvas.width , canvas.height);
        for(var axis=0;axis<=5;axis++)
        {
            context.drawImage(waterObj,60*axis,60*axis);
        }
        var image = document.getElementById("myimage");
        image.src = canvas.toDataURL();
    };
}

export default watermark