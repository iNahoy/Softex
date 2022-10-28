const On = document.getElementById ( 'turnOn' );
const Off = document.getElementById ( 'turnOff' );
const lampada = document.getElementById ( 'lamp' );

function lampOn () {
        lampada.src = './on.jpeg';
}

function lampOff () {
        lampada.src = './off.jpeg';
}
On.addEventListener ( 'click', lampOn );
Off.addEventListener ( 'click', lampOff );