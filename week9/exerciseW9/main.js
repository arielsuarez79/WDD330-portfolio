/*window.alert('Hello');
window.confirm('Do you wish to continue?');

//Browser Information
//Location, Location, Location
window.location.href
window.location.href ='https://www.sitepoint.com/javascript/'
window.location.protocol
window.location.host
window.location.port
window.location.pathname
window.location.search
window.location.assign('https://www.sitepoint.com/')
window.location.toString();

//The Browser History
window.history.go(1); // goes forward 1 page
window.history.go(0); // reloads the current page
window.history.go(-1); // goes back 1 page

//Controlling Windows
const popup = window.open('https://sitepoint.com','SitePoint','width=400,height=400,resizable=yes');
window.moveTo(0,0);
window.resizeTo(600,400);

//Screen Information
window.screen.height
window.screen.width

//The Document Object

document.write('<h1>Hello, world!</h1>');
<h1>
<script>document.write("Hello, world!")</script>
</h1>
//Creating Cookies
document.cookie = 'name=Superman';

//Changing Cookie Values
document.cookie = 'name=Batman'

//Reading Cookies
const cookies = document.cookie.split("; ");
for (crumb of cookies){
    const [key,value] = crumb.split("=");console.log(`The value of ${key} is ${value}`);
}

//Cookie Expiry Dates
const expiryDate = new Date();
const tomorrow = expiryDate.getTime() + 1000 * 60 * 60 * 24;
expiryDate.setTime(tomorrow);
document.cookie = `name=Batman; expires=${expiryDate.toUTCString()}`;

//The Path and Domain of Cookies
document.cookie = 'name=Batman; path=/'

//Secure Cookies
document.cookie = 'name=Batman; secure';

//Deleting Cookies
document.cookie = 'name=Batman; expires=Thu, 01 Jan 197000:00:01 GMT';

//Timing Functions
window.setTimeout( () => alert("Time's Up!"), 3000);
function chant(){ console.log('Beetlejuice'); }const summon = window.setInterval(chant,1000);
window.clearInterval(summon);

//Animation*/
/*const squareElement = document.getElementById('square');
let angle = 0;
setInterval( () => {
angle = (angle + 2) % 360;
squareElement.style.transform = `rotate(${angle}deg)`
}, 1000/60);*/
/*const squareElement = document.getElementById('square');
let angle = 0;
function rotate() {
angle = (angle + 2)%360;
squareElement.style.transform = `rotate(${angle}deg)`
window.requestAnimationFrame(rotate);
}
const id = requestAnimationFrame(rotate);
cancelAnimationFrame(id);

//API´s

addEventListener('storage', (event) => {
    console.log(`The ${event.key} was updated from ${event.oldValue} to ${event.newValue} and saved in
    ${event.storageArea}`) }, false);

localStorage.setItem('superman', JSON.stringify(hero));
superman = JSON.parse(localStorage.getItem('superman'));

//Geolocation

navigator.geolocation.getCurrentPosition(youAreHere);

function youAreHere(position) {
    console.log(`Latitude: ${position.coords.latitude},Longitude: ${position.coords.longitude}`);
}

//Web Workers

const worker = new Worker('task.js');
worker.postMessage('Hello');
self.postMessage('Finished');
worker.addEventListener('message', (event) => { console.log(event.data);}, false);
worker.terminate();
self.close();*/

//A Factorizing Example

//Websockets
const URL = 'wss://echo.websocket.org/';
const outputDiv = document.getElementById('output');
const form = document.forms[0];
const connection = new WebSocket(URL);
connection.addEventListener('open', () => {output('CONNECTED');}, false);
function output(message) {
    const para = document.createElement('p');
    para.innerHTML = message;
    outputDiv.appendChild(para);
}
form.addEventListener('submit', message, false);
function message(event) {
    event.preventDefault();
    const text = form.message.value;
    output(`SENT: ${text}`);
    connection.send(text);
}
connection.addEventListener('message', (event) => { output(`RESPONSE: ${event.data}`);}, false);

//CANVAS
//
const canvasElement = document.getElementById('canvas');
const context = canvasElement.getContext('2d');
context.fillStyle = "#0000cc"; // a blue fill color
context.strokeStyle = "#ccc"; // a gray stroke color
context.lineWidth = 4;
context.fillRect(10,10,100,50);
context.strokeRect(10,100,100,50);
context.beginPath();
context.moveTo(130, 50);
context.lineTo(180, 50);
context.moveTo(155, 50);
context.lineTo(155, 90);
context.strokeStyle = '#c00';
context.lineWidth = 15;
context.stroke();
context.beginPath();
context.arc(200, 200, 30, 0, Math.PI * 2, false);
context.strokeStyle = '#ff0';
context.lineWidth = 4;
context.stroke();
context.fillStyle = '#0c0'; // a blue fill color
context.font = 'bold 26px sans-serif';
context.fillText('Hello', 20, 200);