var sqa = 50;

var balls = [];



class Ball{
    constructor(x, y, dia){
        this.x = x;
        this.y = y;
        this.dia = dia;
        this.xDir = random(1, 5);
        this.yDir = random(1, 5);
        this.r = random(0 , 255);
        this.g = random(0 , 255);
        this.b = random(0 , 255);
    }

    move(){
        this.x += this.xDir;
        this.y += this.yDir;

        

        if(this.x < this.dia/2 || this.x > windowWidth - (this.dia/2)){
            this.xDir *= -1;
        }

        if(this.y < this.dia/2 || this.y > windowHeight - (this.dia/2)){
            this.yDir *= -1;
        }


        
            if(this.x > mouseX ){
                this.xDir *= -1;
            }
    
            if(this.y > mouseY  ){
                this.yDir *= -1;
            }
        

        

       

         

        

    }

    display() {
        fill(this.r, this.g, this.b);
        noStroke();
        ellipse(this.x, this.y, this.dia, this.dia);
    }

    

}


function setup(){
 createCanvas(windowWidth, windowHeight - 5);

 for( let i = 0; i < 5; i++){
   balls.push(new Ball(random(100, windowWidth -100), random(100, windowHeight -100), random(40, 90)));
 }
}

function draw(){
    background(52);

    fill(0, 255 ,255);
    noStroke();

    rect(mouseX, mouseY, sqa , sqa);
    
   

    for(let ball of balls){
        ball.display();
        ball.move();

       
    }

    



}