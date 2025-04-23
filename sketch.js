let classifier;
let video;
let label = "جارٍ التنبؤ...";

function preload() {
  let modelURL = "https://teachablemachine.withgoogle.com/models/oFtMM4Ukq/";
  classifier = ml5.imageClassifier(modelURL + "model.json");
}

function setup() {
  createCanvas(320, 270);
  video = createCapture(VIDEO);
  video.hide();
  classifyVideo();
}

function draw() {
  background(0);
  image(video, 0, 0);
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
}

function classifyVideo() {
  classifier.classify(video, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label + " - " + nf(results[0].confidence, 0, 2);
  classifyVideo();
}
