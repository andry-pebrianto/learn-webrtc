const supportedContraints = navigator.mediaDevices.getSupportedConstraints();
console.log(supportedContraints);

const changeVideoSize = () => {
  stream.getVideoTracks().forEach((track) => {
    const vidWitdh = document.getElementById("vid-width").value;
    const vidHeight = document.getElementById("vid-height").value;
    const capabilities = track.getCapabilities();
    console.log(capabilities);

    const vConstraints = {
      height: {
        exact:
          vidHeight < capabilities.height.max
            ? vidHeight
            : capabilities.height.max,
      },
      width: {
        exact:
          vidWitdh < capabilities.width.max ? vidWitdh : capabilities.width.max,
      },
      // frameRate: 5,
      // aspectRatio: 2,
    };
    track.applyConstraints(vConstraints);
  });

  // stream.getTracks().forEach((track) => {
  //   const capabilities = track.getCapabilities();
  //   console.log(capabilities);
  // });
};
