status = "";
function preload()
{
    img = loadImage('living.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded()
{
    console.log("Model Loaded!");
}

function draw()
{
    image(img , 0 , 0 , 640 , 420);
}

function gotResult()
{
    console.log(results);
}

function back()
{
    window.location = "index.html" ;
}