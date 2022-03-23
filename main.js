noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(200,125)
    canvas = createCanvas(500,500);
    canvas.position(800,125);

    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
}
function modelloaded(){
    console.log("Model is Loaded");
}
function draw(){
    document.getElementById("square_Size").innerHTML = "Width and Height of the square will be "+difference+"pixels."
    background('#ffff00');
    fill('#0000ff');
    stroke('#00F0A8');
    square(noseX,noseY,difference)
}
function gotposes(results){
    if(results.length > 0){
        console.log("Results are"+results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X is "+noseX+"    Nose Y is "+noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("X of left wrist is "+leftWristX+"  X of right wrist is "+rightWristX);

        difference = floor(leftWristX - rightWristX);
        console.log("Difference is "+difference);
    }
}
