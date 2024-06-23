// https://teachablemachine.withgoogle.com/models/blJg_T1s3/

function startClassification() {
  navigator.mediaDevices.getUserMedia({ audio: true });
  classifier = ml5.soundClassifier(
    "https://teachablemachine.withgoogle.com/models/blJg_T1s3/model.json",
    modelReady
  );
}

function modelReady() {
  classifier.classify(gotResults);
}
