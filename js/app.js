const CANVAS_WIDTH = 505;
const CANVAS_HEIGHT = 606;

const HEART_X = 200;
const HEART_Y = 50; 

var allEnemies = [] 


var Gem = function(x,y,speed) {
    this.sprite = 'images/Gem blue.png';
    this.x = x;
    this.y = y; 
 
}

Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}



var Enemy = function(x,y,speed) {
    this.sprite = 'images/enemy-bug.png';
    this.x= Math.random() * 500; 
    this.y= y; 
    this.speed = speed; 
}

Enemy.prototype.update = function(dt) {
    if(this.x <= CANVAS_WIDTH){
        this.x+=(100 * dt);
    }
    else{
        this.x= -101;
    } 

}


Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}





var Player=function(x,y,speed,sprite){
        this.sprite = 'images/char-boy.png';
        this.x=x;
        this.y=y;
        this.speed = speed; 
        this.score = 0; 
        

    }



Player.prototype.update = function(){
    for ( var bug = 0; bug < allEnemies.length; bug++) {
        if(allEnemies[bug].x + 70 > this.x + 1 
        && allEnemies[bug].x < this.x + 1 
        &&  allEnemies[bug].y === this.y ) {
        player.reset();

                    }
                }
    
    if(this.y == -10){
        this.score += 1; 
        ctx.font = "36px Arial";
        console.log(this.score);
        ctx.fillText(this.score, 80, 20);
        player.reset();
        }
     
        
    }
   


Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
    } 


Player.prototype.handleInput = function(key){

    if(key =='left' && this.x > 0){
        this.x -= 100;
    }else if(key== 'up' && this.y> -10){
        this.y-=80;
    }
    else if(key == 'right' && this.x < 400){
                
                this.x += 100; 
            }

            else if (key == 'down' && this.y < 390){
                
                this.y+= 80;

            }
            

        }

Player.prototype.reset= function(){

        //resets the players position data to start back at the beginning.

            this.x= 200;
            // before player hits the water
            this.y= 390;
}





var position = [200, 390];
var player = new Player(position[0],position[1]);

var locale = [-400, 230, -200, 150, -100, 70]; 
enemy1 = new Enemy(locale[0],locale[1]);
enemy2 = new Enemy(locale[2],locale[3]);
enemy3 = new Enemy(locale[4],locale[5]);
   

allEnemies=[enemy1,enemy2,enemy3];

var gem = new Gem(300,200);
//enemy2 = new Enemy(locale[2],locale[3]);
//enemy3 = new Enemy(locale[4],locale[5]);

//allGems=[gem, gem2, gem3]; 





// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


$(document).ready(function(){
    function getPosition(e) {

    //this section is from http://www.quirksmode.org/js/events_properties.html
    var targ;
    if (!e)
        e = window.event;
    if (e.target)
        targ = e.target;
    else if (e.srcElement)
        targ = e.srcElement;
    if (targ.nodeType == 3) // defeat Safari bug
        targ = targ.parentNode;

    // jQuery normalizes the pageX and pageY
    // pageX,Y are the mouse positions relative to the document
    // offset() returns the position of the element relative to the document
    var x = e.pageX - $(targ).offset().left;
    var y = e.pageY - $(targ).offset().top;

    return {"x": x, "y": y};
};

// now just make sure you use this with jQuery
// obviously you can use other events other than click
$('canvas').click(function(event) {
    // jQuery would normalize the event
    position = getPosition(event);
    //now you can use the x and y positions
    alert("X: " + position.x + " Y: " + position.y);
});
}); 
