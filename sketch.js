var principal, prn, bg;

var obs, premio, plyerState, pem, count, fase;

var gameState = 2;

var fantasma, almas, eyes;

var tempo = 60;

var obstaculo,
  obstaculo1,
  obstaculo2,
  obstaculo3,
  obstaculo4,
  obstaculo5,
  obstaculo6,
  obstaculo7,
  obstaculo8,
  obstaculo9,
  obstaculo10,
  obstaculo11,
  obstaculo12,
  obstaculo13,
  obstaculo14,
  obstaculo15,
  obstaculo16,
  obstaculo17,
  obstaculo18,
  obstaculo19,
  obstaculo20,
  obstaculo21,
  obstaculo22,
  parede,
  parede1,
  parede2,
  parede3;

function preload() {
  prn = loadAnimation("Imported piskel (1).gif");
  bg = loadImage("Imported piskel (2).gif");
  pem = loadImage("Imported piskel (3).gif");
  eyes = loadImage("Imported piskel (4).gif");

}

function setup() {
  createCanvas(200, 200);

  count = 50;
  fase = 1;

  principal = createSprite(100, 100, 20, 20);
  principal.addAnimation("pessoa", prn);
  principal.scale = 0.2;

  premio = createSprite(100, 350, 30, 40);
  premio.addImage(pem);
  premio.scale = 0.1;

  parede = createSprite(0, 300, 5, 600);
  parede1 = createSprite(600, 300, 5, 600);
  parede2 = createSprite(300, 0, 600, 5);
  parede3 = createSprite(300, 600, 600, 5);

  obstaculo1 = createSprite(300, 300, 15, 200);
  obstaculo2 = createSprite(250, 300, 15, 200);
  obstaculo3 = createSprite(375, 200, 150, 15);
  obstaculo4 = createSprite(425, 150, 150, 15);
  obstaculo5 = createSprite(375, 300, 150, 15);
  obstaculo6 = createSprite(250, 400, 15, 200);
  obstaculo7 = createSprite(300, 440, 200, 15);
  obstaculo8 = createSprite(205, 340, 15, 200);
  obstaculo9 = createSprite(445, 250, 200, 15);
  obstaculo10 = createSprite(130, 440, 200, 15);
  obstaculo11 = createSprite(100, 250, 200, 15);
  obstaculo12 = createSprite(500, 300, 15, 200);
  obstaculo13 = createSprite(550, 300, 15, 200);
  obstaculo14 = createSprite(400, 370, 60, 60);
  obstaculo15 = createSprite(350, 500, 200, 15);
  obstaculo16 = createSprite(250, 60, 15, 200);
  obstaculo17 = createSprite(500, 140, 15, 200);
  obstaculo18 = createSprite(300, 150, 15, 200);
  obstaculo19 = createSprite(270, 65, 50, 15);
  obstaculo20 = createSprite(550, 450, 15, 200);
  obstaculo21 = createSprite(450, 500, 200, 15);
  obstaculo22 = createSprite(100, 500, 200, 15);

  obs = new Group();

  obs.add(obstaculo1);
  obs.add(obstaculo2);
  obs.add(obstaculo3);
  obs.add(obstaculo4);
  obs.add(obstaculo5);
  obs.add(obstaculo6);
  obs.add(obstaculo7);
  obs.add(obstaculo8);
  obs.add(obstaculo9);
  obs.add(obstaculo10);
  obs.add(obstaculo11);
  obs.add(obstaculo12);
  obs.add(obstaculo13);
  obs.add(obstaculo14);
  obs.add(obstaculo15);
  obs.add(obstaculo16);
  obs.add(obstaculo17);
  obs.add(obstaculo18);
  obs.add(obstaculo19);
  obs.add(obstaculo20);
  obs.add(obstaculo21);
  obs.add(obstaculo22);
  obs.add(parede);
  obs.add(parede1);
  obs.add(parede2);
  obs.add(parede3);

  almas = new Group();
}

function draw() {
  background(bg);

  if (gameState == 2) {
    fill("white");
    textSize(5);
    text("Use as setas para mover e encontre o prêmio rápido.", 50, 100);
    text("Aperte espaço para iniciar.", 50, 70);
    text("Mais fantasmas aparecerão a cade fase.", 50, 130);


    if (keyDown("space")) {
      gameState = 0;
    }
  }

  camera.x = principal.x;
  camera.y = principal.y;

   principal.collide(obs);

  if (principal.isTouching(premio)) {
    gameState = 1;
    playerState = "Vitória";
  }
  if (tempo <= 0) {
    gameState = 1;
    playerState = "Derrota";
  }

  if (gameState === 1) {
    if(playerState === "Derrota"){
      textSize(7)
    fill("green");
    text("Aperte R para tentar novamente", camera.x - 50, camera.y);
    text(playerState, camera.x - 50, camera.y - 15);
    }
    if(playerState === "Vitória"){
      textSize(7)

      fill("green");
      text("Aperte R para passar de fase", camera.x - 50, camera.y);
      text(playerState, camera.x - 50, camera.y - 15);
      }

    if (keyDown("r")) {
      tempo = 60;
      gameState = 0;
      principal.x = 100;
      principal.y = 100;
      if (playerState === "Vitória" && count > 9) {
        count = count - 5;
        fase = fase + 1;
      }
    }
  }

 
  // console.log(mouseX, mouseY);

  // console.log(obs);

  if (gameState === 0) {
    if (frameCount % 30 === 0) {
      tempo = tempo - 1;
    }
    if (frameCount % count === 0) {
      fantasma = createSprite(random(0, 600), 300, 20, 20);
      fantasma.lifetime = 70;
      fantasma.velocityX = random(-7,7)
      fantasma.velocityY = random(-7,7)
  fantasma.addImage(eyes)
  fantasma.scale = 0.07
      almas.add(fantasma);

  
    }

    if(principal.isTouching(almas)){
      gameState = 1;
      playerState = "Derrota"
    }

    if (keyDown("UP_ARROW")) {
      principal.y = principal.y - 7;
    }

    if (keyDown("DOWN_ARROW")) {
      principal.y = principal.y + 7;
    }
    if (keyDown("LEFT_ARROW")) {
      principal.x = principal.x - 7;
    }
    if (keyDown("RIGHT_ARROW")) {
      principal.x = principal.x + 7;
    }

    drawSprites();

    fill("red");
    textSize(5);
    text("Tempo restante:" + tempo, camera.x - 50, camera.y - 50);
  }

  if (count >= 10) {
    textSize(5);

    text("Fase: " + (fase), camera.x + 40, camera.y - 50);
  } else if (count < 10) {
    textSize(5);

    text("Fase: dificuldade máxima", camera.x + 40, camera.y - 50);
  }

  console.log(count);
}
