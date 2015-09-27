var names = ["Text", "Getup1NEW", "p5.js", "TheDramaMan", "<--- This message will never shown!"];
function spawn(){
fill(240);
		rect(mouseX, mouseY, 100, 70);
		fill(2, 2, 230);
		rect(mouseX, mouseY, 100, 12);
		stroke(2, 2, 230);
		fill(255, 2, 2);
		rect(mouseX+90, mouseY+4, 4, 4);
		fill(248, 243, 132);
		rect(mouseX+85, mouseY+4, 4, 4);
		fill(2, 255, 2);
		rect(mouseX+80, mouseY+4, 4, 4);
		stroke(255);
		fill(255);
		
		rect(mouseX+3, mouseY+4, 4, 4);
		
		fill(250, 100, 20);
		ellipse(mouseX+4, mouseY+42, 2, 2);
		
		fill(1);
   text(names[(Math.floor(Math.random()*3))], mouseX+4, mouseY+28);

		

}

function setup() {
	createCanvas(screen.width-20, screen.height-155);
	fill(255);
	background(256);		
	stroke(2, 2, 230);
}


function keyPressed() {
  if (key == CODED) {
    if (keyCode == UP) {
      spawn();
    }
}}
function draw() {
	if(mouseIsPressed) {
		spawn();
	} else {
//TODO: implement idling function
	}
}
