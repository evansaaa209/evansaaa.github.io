(function() {
let counter = 0;

const originalHTML = document.body.innerHTML;
let messageWrapper = document.getElementById('message');

document.onclick = function(event) {
    event.preventDefault();
    document.body.innerHTML = originalHTML;
    messageWrapper = document.getElementById('message');
}

document.onkeydown = function (event) {
    if (event.keyCode === 32) {
        event.preventDefault();
    }
}

document.onkeyup = function(event) {
    const keyCodePressed = event.keyCode;
    messageWrapper.innerText = keyCodePressed + ':' + event.key;

    if (keyCodePressed === 65) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const spider1 = document.createElement('img');
        spider1.className = 'spider1';
        spider1.src = `img/spider1.png`;
        spider1.style.left = `${coordinates.x}px`;
        spider1.style.top = `${coordinates.y}px`;
        spider1.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(spider1);
    }

    if (keyCodePressed === 66) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const spider2 = document.createElement('img');
        spider2.className = 'spider2';
        spider2.src = `img/spider2.png`;
        spider2.style.left = `${coordinates.x}px`;
        spider2.style.top = `${coordinates.y}px`;
        spider2.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(spider2);
    }

    if (keyCodePressed === 80) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const spider3 = document.createElement('img');
        spider3.className = 'spider3';
        spider3.src = `img/spider3.png`;
        spider3.style.left = `${coordinates.x}px`;
        spider3.style.top = `${coordinates.y}px`;
        spider3.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(spider3);
    }

    if (keyCodePressed === 68) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const spider4 = document.createElement('img');
        spider4.className = 'spider4';
        spider4.src = `img/spider4.png`;
        spider4.style.left = `${coordinates.x}px`;
        spider4.style.top = `${coordinates.y}px`;
        spider4.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(spider4);
    }

    if (keyCodePressed === 72) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const spider5 = document.createElement('img');
        spider5.className = 'spider5';
        spider5.src = `img/spider5.png`;
        spider5.style.left = `${coordinates.x}px`;
        spider5.style.top = `${coordinates.y}px`;
        spider5.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(spider5);
    }

    if (keyCodePressed === 89) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const spider6 = document.createElement('img');
        spider6.className = 'spider6';
        spider6.src = `img/spider6.png`;
        spider6.style.left = `${coordinates.x}px`;
        spider6.style.top = `${coordinates.y}px`;
        spider6.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(spider6);
    }

    if (keyCodePressed === 71) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const spider7 = document.createElement('img');
        spider7.className = 'spider7';
        spider7.src = `img/spider7.png`;
        spider7.style.left = `${coordinates.x}px`;
        spider7.style.top = `${coordinates.y}px`;
        spider7.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(spider7);
    }

    if (keyCodePressed === 78) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const spider8 = document.createElement('img');
        spider8.className = 'spider8';
        spider8.src = `img/spider8.png`;
        spider8.style.left = `${coordinates.x}px`;
        spider8.style.top = `${coordinates.y}px`;
        spider8.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(spider8);
    }
}
}());