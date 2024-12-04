const audioInputEl = document.getElementById("audio-input");
const audioOutputEl = document.getElementById("audio-output");
const videoInputEl = document.getElementById("video-input");

const getDevices = async () => {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    console.log(devices);

    devices.forEach((device) => {
      const option = document.createElement("option");
      option.value = device.deviceId;
      option.text = device.label;
      if (device.kind === "audioinput") {
        audioInputEl.appendChild(option);
      }
      if (device.kind === "audiooutput") {
        audioOutputEl.appendChild(option);
      }
      if (device.kind === "videoinput") {
        videoInputEl.appendChild(option);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const changeAudioInput = async (e) => {
  try {
    const deviceId = e.target.value;
    const contraints = {
      audio: {
        deviceId: { exact: deviceId },
      },
      video: true,
    };
    stream = await navigator.mediaDevices.getUserMedia(contraints);
  } catch (error) {
    console.log(error);
  } finally {
    const tracks = stream.getAudioTracks();
    console.log(tracks);
  }
};
const changeAudioOutput = async (e) => {
  await videoElement.setSinkId(e.target.value);
  console.log("audio output changed");
};
const changeVideo = async (e) => {
  try {
    const deviceId = e.target.value;
    const contraints = {
      audio: true,
      video: {
        deviceId: { exact: deviceId },
      },
    };
    stream = await navigator.mediaDevices.getUserMedia(contraints);
  } catch (error) {
    console.log(error);
  } finally {
    const tracks = stream.getVideoTracks();
    console.log(tracks);
  }
};

getDevices();
