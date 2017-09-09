var canvas;
var score;
var button;
var initialInput;
var submitButton;
var database;

function setup() {
  canvas = createCanvas(100, 100);
  score = 0;
  createP('Click the button to get points.')
  button = createButton('click');
  button.mousePressed(increaseScore);
  initialInput = createInput('initials');
  submitButton = createButton('submit');
  submitButton.mousePressed(submitScore);

  var config = {
    apiKey: "AIzaSyDJ8RfqNQk1dNu-B8OFSORfsldYXd1H41A",
    authDomain: "mark-3a853.firebaseapp.com",
    databaseURL: "https://mark-3a853.firebaseio.com",
    projectId: "mark-3a853",
    storageBucket: "mark-3a853.appspot.com",
    messagingSenderId: "135538140974"
  };
  firebase.initializeApp(config);

  database = firebase.database();
}

function submitScore() {
  var data = {
    initials: initialInput.value(),
    score: score
  }
  console.log(data);
  var ref = database.ref('scores');
  ref.push(data);
}

function increaseScore() {
  score++;
}

function draw() {
  background(0);
  textAlign(CENTER);
  textSize(32);
  fill(255);
  text(score, width / 2, height / 2);
}
