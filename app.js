const lienzo = document.querySelector('#lienzo');

const ctx = lienzo.getContext('2d');

document.addEventListener("DOMContentLoaded", function() {

    ctx.beginPath();
    ctx.arc(200, 200, 150, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(150, 150, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(250, 150, 20, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(200, 220, 80, 0.2 * Math.PI, 0.8 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
});
