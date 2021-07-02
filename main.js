canvas = document.getElementById("myCanvas");

 ctx = canvas.getContext("2d");

 NASA_Mars_Images_Array = ["Mars1.jpg", "Mars2.jpg", "Mars3.jpg", "Mars4.jpg"];

 random_num = Math.floor(Math.random() * 4);

 console.log(random_num);

rover_width = 100;
rover_height  = 90;

background_image = NASA_Mars_Images_Array[random_num];

console.log("Background Image" + background_image);

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add(){

    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

   
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;

}

function uploadBackground(){

    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadrover(){

    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){

    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38'){

        up();
        console.log("Up arrow key was pressed");
    }
    if(keyPressed == '40'){

        down();
        console.log("Down arrow key was pressed");
    }
    if(keyPressed == '37'){

        left();
        console.log("Left arrow key was pressed");
    }
    if(keyPressed == '39'){

        right();
        console.log("Right arrow key was pressed");
    }

}

function up(){

    if(rover_y >=0){

        rover_y = rover_y - 10;
        console.log("When up arrow is pressed = " + rover_x + " - " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function down(){

    if(rover_y <=500){

        rover_y = rover_y + 10;
        console.log("When down arrow is pressed = " + rover_x + " - " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right(){

    if(rover_x <=700){

        rover_x = rover_x + 10;
        console.log("When right arrow is pressed = " + rover_x + " - " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left(){

    if(rover_x >=0){

        rover_x = rover_x - 10;
        console.log("When left arrow is pressed = " + rover_x + " - " + rover_y);
        uploadBackground();
        uploadrover();
    }
}