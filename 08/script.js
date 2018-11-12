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

        const angry1 = document.createElement('img');
        angry1.className = 'angry1';
        angry1.src = `img/angry1.jpg`;
        angry1.style.left = `${coordinates.x}px`;
        angry1.style.top = `${coordinates.y}px`;
        angry1.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(angry1);
    }

    if (keyCodePressed === 66) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const angry2 = document.createElement('img');
        angry2.className = 'angry2';
        angry2.src = `img/angry2.jpg`;
        angry2.style.left = `${coordinates.x}px`;
        angry2.style.top = `${coordinates.y}px`;
        angry2.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(angry2);
    }

    if (keyCodePressed === 67) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const angry3 = document.createElement('img');
        angry3.className = 'angry3';
        angry3.src = `img/angry3.jpg`;
        angry3.style.left = `${coordinates.x}px`;
        angry3.style.top = `${coordinates.y}px`;
        angry3.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(angry3);
    }

    if (keyCodePressed === 68) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const angry4 = document.createElement('img');
        angry4.className = 'angry4';
        angry4.src = `img/angry4.jpg`;
        angry4.style.left = `${coordinates.x}px`;
        angry4.style.top = `${coordinates.y}px`;
        angry4.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(angry4);
    }

    if (keyCodePressed === 69) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const angry5 = document.createElement('img');
        angry5.className = 'angry5';
        angry5.src = `img/angry5.jpg`;
        angry5.style.left = `${coordinates.x}px`;
        angry5.style.top = `${coordinates.y}px`;
        angry5.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(angry5);
    }

    if (keyCodePressed === 70) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const angry6 = document.createElement('img');
        angry6.className = 'angry6';
        angry6.src = `img/angry6.jpg`;
        angry6.style.left = `${coordinates.x}px`;
        angry6.style.top = `${coordinates.y}px`;
        angry6.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(angry6);
    }

    if (keyCodePressed === 71) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const angry7 = document.createElement('img');
        angry7.className = 'angry7';
        angry7.src = `img/angry.jpg`;
        angry7.style.left = `${coordinates.x}px`;
        angry7.style.top = `${coordinates.y}px`;
        angry7.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(angry7);
    }

var audio;
    document.onkeypress = function (e) {
    switch(e.key) {
    case "6":
      audio = new Audio("sound1.mp3");
      break;
  }
    audio.play();
};
}
}());