const videoElement = document.getElementById("my-video");
let stream = null; // init stream var so we can use anywhere
let mediaStream = null; // init mediaStream var for screenShare

const getMicAndCamera = async (e) => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: true, // use your headphones, or be prepared for feedback!
      audio: true,
    });

    changeButtons([
      "green",
      "blue",
      "blue",
      "blue",
      "blue",
      "blue",
      "grey",
      "grey",
      "blue",
    ]);
  } catch (error) {
    // user denied access to mic/camera
    console.log("user denied access to mic/camera");
    console.log(error);
  }
};

const showMyFeed = (e) => {
  videoElement.srcObject = stream; // this will set our MediaStream (stream) to our <video />
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "blue",
    "blue",
    "grey",
    "grey",
    "blue",
  ]);
};

const stopMyFeed = (e, feedType) => {
  const tracks = stream.getTracks();
  tracks.forEach((track) => {
    if (track.kind === feedType) {
      track.stop();
    }
  });
};

document
  .getElementById("share")
  .addEventListener("click", (e) => getMicAndCamera(e));
document
  .getElementById("show-video")
  .addEventListener("click", (e) => showMyFeed(e));
document
  .getElementById("stop-video")
  .addEventListener("click", (e) => stopMyFeed(e, "video"));
document
  .getElementById("stop-audio")
  .addEventListener("click", (e) => stopMyFeed(e, "audio"));
document
  .getElementById("change-size")
  .addEventListener("click", () => changeVideoSize());
document
  .getElementById("start-record")
  .addEventListener("click", () => startRecording());
document
  .getElementById("stop-record")
  .addEventListener("click", () => stopRecording());
document
  .getElementById("play-record")
  .addEventListener("click", () => playRecording());
document
  .getElementById("share-screen")
  .addEventListener("click", () => shareScreen());

document
  .getElementById("audio-input")
  .addEventListener("change", (e) => changeAudioInput(e));
document
  .getElementById("audio-output")
  .addEventListener("change", (e) => changeAudioOutput(e));
document
  .getElementById("video-input")
  .addEventListener("change", (e) => changeVideo(e));
