function preload(){
   classifier = ml5.imageClassifier('DoodleNet');
}
function setup(){
    canvas = createCanvas(400, 300);
    canvas.center();
    background("#fff");

    synth = window.speechSynthesis;
    canvas.mouseReleased(classifyCanvas);
}
function draw(){
    strokeWeight(5);
    stroke(0);

    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
function classifyCanvas(){
    classifier.classify(canvas, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById('guessed_image').innerHTML = "Label: " + results[0].label.replace("_", " ");
        document.getElementById('accuracy').innerHTML = "Probability chance: " + Math.round(results[0].confidence * 100) + '%';

        utterThis = new SpeechSynthesisUtterance("I see " + results[0].label.replace("_", " "));
        synth.speak(utterThis);
    }
    }
function clear_canvas(){
    background("#fff");
}

































