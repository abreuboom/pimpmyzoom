import React, { useEffect, useState } from "react";

import css from "../css/Preview.module.css";

const bodyPix = require("@tensorflow-models/body-pix");

export default function Preview(props) {
  const [video] = useState(React.createRef());
  const [canvas] = useState(React.createRef());

  const videoError = error => {
    console.log("error", error);
  };

  const handleVideo = stream => {
    video.current.srcObject = stream;
  };

  async function cropTheDude() {
    while (!video.current.paused) {
      const architecture = "MobileNetV1";
      const outputStride = 16;
      const multiplier = 0.5;
      const quantBytes = 2;
      const segmentationThreshold = 0.5;

      let net;

      if (net) {
        // dispose
        net.dispose();
      }

      net = await bodyPix.load();

      var image = video.current;

      const segmentation = await net.estimatePersonSegmentation(
        image,
        outputStride,
        segmentationThreshold
      );

      const maskBackground = true;
      // Convert the personSegmentation into a mask to darken the background.
      const backgroundDarkeningMask = bodyPix.toMaskImageData(
        segmentation,
        maskBackground
      );

      const opacity = 1;
      const maskBlurAmount = 1;
      const flipHorizontal = false;

      // draw the mask onto the image on a canvas.  With opacity set to 0.7 this will darken the background.
      //   bodyPix.drawMask(
      //     canvas.current,
      //     image,
      //     backgroundDarkeningMask,
      //     opacity,
      //     maskBlurAmount,
      //     flipHorizontal
      //   );

      drawBody(segmentation);
    }
  }

  function drawBody(personSegmentation) {
    let contextPerson = canvas.current.getContext("2d");
    const camera = video.current;
    contextPerson.drawImage(camera, 0, 0, camera.width, camera.height);
    var imageData = contextPerson.getImageData(
      0,
      0,
      camera.width,
      camera.height
    );
    var pixel = imageData.data;
    for (var p = 0; p < pixel.length; p += 4) {
      if (personSegmentation.data[p / 4] === 0) {
        pixel[p + 3] = 0;
      }
    }
    contextPerson.imageSmoothingEnabled = true;
    contextPerson.putImageData(imageData, 0, 0);
  }

  useEffect(() => {
    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia ||
      navigator.oGetUserMedia;
    if (navigator.getUserMedia) {
      navigator.getUserMedia({ video: true }, handleVideo, videoError);
    }
  });

  return (
    <>
      <video
        autoPlay={true}
        ref={video}
        id='videoElement'
        width='640px'
        height='480px'
        onLoadedData={cropTheDude}></video>

      <canvas
        ref={canvas}
        id='canvasElement'
        width='640px'
        height='480px'></canvas>
    </>
  );
}
