canvas=document.getElementById('myCanvas');
ctx= canvas.getContext("2d");
var mouse_event="empty";
var last_position_of_x, last_position_of_y;
color= "red";
width_of_line= 5;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown (e){
mouse_event="mousedown";
color= document.getElementById("color").value;
width_of_line=document.getElementById("width_of_line").value;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup (e){
mouse_event="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave (e){
mouse_event="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove (e){
current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
current_position_of_mouse_y=e.clientY-canvas.offsetTop;
if(mouse_event=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
ctx.moveTo(last_position_of_x, last_position_of_y);
ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
ctx.stroke();
}
last_position_of_x=current_position_of_mouse_x;
last_position_of_y=current_position_of_mouse_y;
}
function clear_area(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}