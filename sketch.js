function setup() {
    createCanvas(400, 400);
    background("blue");
  }
  
  function draw() {
   fill("red");
    stroke("black");
    if(mouseIsPressed){
    rect(mouseX,mouseY,20, 20);
    
  }
  }