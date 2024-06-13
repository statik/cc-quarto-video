//Initialize video
const startCam = () => {

    const video = document.getElementById("video");
    console.log("starting video");

    // validate video element
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
                video.srcObject = stream;
            })
            .catch(function (error) {
                console.log("Something went wrong!", error);
            });
    }
};
