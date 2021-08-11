function setup() {
    video=createCapture(VEDIO);
    video.size(550,500);
    create=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}
function draw() {
    background('#00FFFF');
}
function modelLoaded() {
    console.log('poseNet is intioalized');
}
function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
    }
}
