const shareScreen = async () => {
  try {
    mediaStream = await navigator.mediaDevices.getDisplayMedia({
      video: true, // use your headphones, or be prepared for feedback!
      audio: false,
      surfaceSwitching: "include", // include, exclude
    });
  } catch (error) {
    console.log(error);
  }
};
