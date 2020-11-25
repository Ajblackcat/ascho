var hypnoticBall,database,positon;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    hypnoticBall = createSprite(250,250,10,10);
    hypnoticBall.shapeColor = "red";
   
    var hypnoticBallPosition=database.ref('ball/position');
    hypnoticBallPosition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function readPosition(data){
position=data.val();
hypnoticBall.x=position.x
hypnoticBall.y=position.y
console.log(hypnoticBall.x);
console.log(hypnoticBall.y);
}
function showError(){

}
