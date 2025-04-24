let canvas = document.getElementById("meucanvas");
let ctx = canvas.getContext("2d");

let player = new Image();
player.src = "airplane.png";

let background = new Image();
background.src = "rua.png";

let bgY = 0;
let bgW = canvas.width;
let bgH = canvas.height;
let playerSpeed = 1;
let pX = 170;
let pY = 500;
let pW = 100;
let pH = 100;

let bullet = new Image();
bullet.src = "bullet.png";

let bW = 16;
let bH = 16;
let bSpeed = 5;
let bullets = [[400, 400],[400, -100],[400, -100]];


canvas.addEventListener (
    "mousemove", 
    function(event)
    {
        let rect = canvas.getBoundingClientRect();
        let cX = event.clientX - rect.left;
        let cY = event.clientY - rect.top;
        //console.log("Coords: " + cX + " ," + cY);

        pX = cX - pW/2;
        //pY = cY - pH/2;
    }
);

canvas.addEventListener(
    "click",
    function(event)
    {
        //console.log("atirou")
        for (let i = 0; i <bullets.length; i++)
        {
            // lateral: if (bullets[i][0] > 900)
            if (bullets[i][1] < -100) 
            {
                bullets[i][0] = pX;
                bullets[i][1] = pY;
                break;
            }
        }
    }
);

function drawBullets()
{
    for (let i = 0; i < bullets.length; i++)
    {
        bullets[i][1] -= bSpeed;
        ctx.beginPath();
        ctx.drawImage(
            bullet,
            bullets[i][0],
            bullets[i][1],
            bW,
            bH
        );
    }
}

function jogar()
{
    ctx.clearRect (0, 0, canvas.width, canvas.height);

    bgY += playerSpeed;
    if(bgY >= bgH)
    {
        bgY -= bgH;

    }
    ctx.drawImage(background, 0, bgY, bgW, bgH);
    ctx.drawImage(background, 0, bgY - bgH, bgW, bgH);

    ctx.drawImage(player, pX, pY, pW, pH);

    drawBullets()
}

setInterval(jogar, 1000/60);


/*para ir para o lado jogarlateral ()

function jogarLateral ();
{
    ctx.clearRect (0, 0, canvas.width, canvas.height);
    
    bgY -= playerSpeed;
    if(bgY <= -bgW)
    {
        bgY += bgW;
    }
    ctx.drawImage(background, bgY, 0, bgW, bgH);
    ctx.drawImage(background, bgY, 0, bgW, +bgW);

    ctx.drawImage(player, 170, 500, 100, 100);

}*/ 

