const triangle = document.querySelector("#child");
let posY = 0;
let posX = -50;
const move = () => {
    if(posX > -51 && posX < 150 && posY < 400){
        posY += 2;
        posX++;
        triangle.style.top = `${posY}px`;
        triangle.style.left = `${posX}px`;
        setTimeout(move, 5);
    } else if (posX > -250 && posY === 400){
        posX--;
        triangle.style.left = `${posX}px`;
        setTimeout(move, 1);
    }
    else if (posX < -50 && posY > 0){
        posX++;
        posY -= 2;
        triangle.style.top = `${posY}px`;
        triangle.style.left = `${posX}px`;
        setTimeout(move, 5);
    }
}

move();