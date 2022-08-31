img="";
Status="";
objects=[];

function preload(){
    img=loadImage('dog_cat.jpg');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modeloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modeloaded(){
console.log("Model is loaded!");
Status = true;
objectDetector.detect(img,gotResults);
}

function gotResults(error,results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        objects=results;
    }
}

function draw(){
    image(img,0,0,640,420);
    
   if (Status != "") {
       
    for(i = 0; i<objects.length;i++){

        document.getElementById("status").innerHTML = "Status : Objects Detected";
        
        fill("#FF0000");
        percent = floor(objects[i].confidence*100);
        text(objects[i].label + " " + percent + "%",objects[i].x,objects[i].y);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

    }

   }
}