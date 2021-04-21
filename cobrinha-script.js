let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); 
let box = 32;
let snake = []; 
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";
let comida = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}
function backG(){
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, 16 * box, 16 * box); 
}

function criarCobra (){
    for(j = 0; j < snake.length; j++){
        context.fillStyle = "green";
        context.fillRect(snake[j].x, snake[j].y, box, box);
    }
}
function criarComida (){
    context.fillStyle = "blue";
    context.fillRect(comida.x, comida.y, box, box);
}

document.addEventListener('keydown', atualizaçao);

function atualizaçao(event){
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up') direction = 'down';
}

function Start() {    
    if(snake[0].x > 15*box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15*box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;
    for(k = 1; k < snake.length; k++){
        if(snake[0].x == snake[k].x && snake[0].y == snake[k].y) {
            clearInterval(jogo);
            alert('GAMER OVER, TENTE NOVAMENTE!');
        }
    }
    backG();
    criarCobra();
    criarComida();
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;
    if (snakeX != comida.x || snakeY != comida.y) {
        snake.pop(); 
    }
    else {
        comida.x = Math.floor(Math.random() * 15 + 1) * box;
        comida.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let cabeça ={
        x: snakeX,
        y: snakeY
    }

    snake.unshift(cabeça); 
}

let jogo = setInterval(Start, 100); 