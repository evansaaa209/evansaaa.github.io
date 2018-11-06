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
    const coordinates = helpers.generateCoordinates();
    messageWrapper.innerText = keyCodePressed + ':' + event.key;

    if (keyCodePressed === 65) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const apple = document.createElement('img');
        apple.className = 'angry1';
        apple.src = `img/angry1.jpg`;
        apple.style.left = `${coordinates.x}px`;
        apple.style.top = `${coordinates.y}px`;
        apple.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(angry1);

    }

    if (keyCodePressed === 66) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const bat = document.createElement('img');
        bat.className = 'angry2';
        bat.src = `img/angry2.jpg`;
        bat.style.left = `${coordinates.x}px`;
        bat.style.top = `${coordinates.y}px`;
        bat.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(angry2);

    }

    if (keyCodePressed === 67) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const cat = document.createElement('img');
        cat.className = 'angry3';
        cat.src = `img/angry3.jpg`;
        cat.style.left = `${coordinates.x}px`;
        cat.style.top = `${coordinates.y}px`;
        cat.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(angry3);

    }


    if (keyCodePressed === 68) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const dog = document.createElement('img');
        dog.className = 'angry4';
        dog.src = `img/angry4.jpg`;
        dog.style.left = `${coordinates.x}px`;
        dog.style.top = `${coordinates.y}px`;
        dog.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(angry4);

    }

    if (keyCodePressed === 69) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const egg = document.createElement('img');
        egg.className = 'angry5';
        egg.src = `img/angry5.jpg`;
        egg.style.left = `${coordinates.x}px`;
        egg.style.top = `${coordinates.y}px`;
        egg.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(angry5);

    }


    if (keyCodePressed === 70) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const fish = document.createElement('img');
        fish.className = 'angry6';
        fish.src = `img/angry6.jpg`;
        fish.style.left = `${coordinates.x}px`;
        fish.style.top = `${coordinates.y}px`;
        fish.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(angry6);

    }



    if (keyCodePressed === 71) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const giraffe = document.createElement('img');
        giraffe.className = 'angry7';
        giraffe.src = `img/angry.jpg`;
        giraffe.style.left = `${coordinates.x}px`;
        giraffe.style.top = `${coordinates.y}px`;
        giraffe.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(angry7);