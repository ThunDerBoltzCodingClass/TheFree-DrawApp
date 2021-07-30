var mouseEvent= "empty";

canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color= document.getElementById("colorInput").value;
lineWidth= document.getElementById("widthInput").value;
radius= document.getElementById("radiusInput").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_position_of_x= e.clientX - canvas.offsetLeft;
    current_position_of_y= e.clientY - canvas.offsetTop;
if(mouseEvent == "mouseDown"){
    console.log("current position of x and y is:");
    console.log("x = "+current_position_of_x+" y = "+current_position_of_y);
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth= lineWidth;
    ctx.arc(current_position_of_x, current_position_of_y, radius, 0, 2 * Math.PI);
    ctx.stroke();
}
}