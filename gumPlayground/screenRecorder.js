let mediaRecorder;
let recordedBlobs = []; // an array to hold the blobs for playback

const startRecording = () => {
  mediaRecorder = new MediaRecorder(mediaStream);
  mediaRecorder.ondataavailable = (e) => {
    // akan berjalan ketika mediaRecorder stop
    console.log("Data is available for media recorder!");
    recordedBlobs.push(e.data);
  };
  mediaRecorder.start();
};


const stopRecording = () => {
  mediaRecorder.stop();
};

const playRecording = () => {
  const superBuffer = new Blob(recordedBlobs);
  const downloadUrl = URL.createObjectURL(superBuffer);

  const a = document.createElement("a");
  a.style.display = "none";
  a.href = downloadUrl;
  a.download = "recording.webm"; // Nama file yang akan diunduh

  document.body.appendChild(a);
  a.click();

  // Membersihkan elemen dan URL untuk menghindari kebocoran memori
  document.body.removeChild(a);
  URL.revokeObjectURL(downloadUrl);
};
