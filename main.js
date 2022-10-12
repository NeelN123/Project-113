function preload(){
}

function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(210, 350);
    video= createCapture(VIDEO);
    video.hide();
    tint_color="";
}

function draw(){
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    
    fill(100,100,250);
    rect(50, 37, 530, 30);
    rect(50, 425, 530, 30);
    rect(50, 45, 30, 400);
    rect(580, 45, 30, 400);
    fill(100,230,250);
    circle(50 ,50 , 70);
    circle(580 ,50 , 70);
    circle(50 ,425 , 70);
    circle(580 ,425 , 70);




}
function take_snapshot(){
    save('student_name.jpg')
}
function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}