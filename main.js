var mouseEvent = "empty";
var last_position_of_x , last_position_of_y;
canvas=document.getElementById('myCanvas').value;
ctx=canvas.getContext("2d");
color="blue"
line_width=5;
var width=screen.width;
new_width=screen.width - 70;
new_width=screen.height - 300;
if (width<992) {
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow=hidden;
}
canvas.addEventListener("touchstart" , my_touchstart);
function my_touchstart(e) {
    color=document.getElementById("color").value;
    line_width = document.getElementById("width_of_line").value;
    last_position_of_x = e.touch[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touch[0].clientY - canvas.offsetTop;
}
addcanvas.addEventListener("touchmove" , my_touchmove);
function my_touchmove(e) {
    current_position_of_x = e.touch[0].clientX - canvas.offsetLeft;
    current_position_of_y = e.touch[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;
    ctx.moveTo(last_position_of_x , last_position_of_y);
    ctx.lineTo(current_position_of_x , current_position_of_y);
    ctx.stroke();
    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;

}
canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    line_width = document.getElementById("width_of_line").value;
    mouseEvent = "mouseDown"
}
canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e) {
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;

if (mouseEvent=="mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;
    ctx.moveTo(last_position_of_x , last_position_of_y);
    ctx.lineTo(current_position_of_x , current_position_of_y);
    ctx.stroke();
} 
last_position_of_x = current_position_of_x;
last_position_of_y = current_position_of_y;
}
canvas.addEventListener("mouseup" , my_mouseup)

function my_mouseup(e) {
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave" , my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseLeave";
}
function cleararea() {
    ctx.clearRect(0 , 0 , ctx.canvas.width , ctx.canvas.height);
}


