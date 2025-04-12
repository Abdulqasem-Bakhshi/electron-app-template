const {ipcRenderer} = require('electron');

const minimizeButton = document.getElementById('minimize');
const maximizeButton = document.getElementById('maximize');
const closeButton = document.getElementById('close');

document.getElementById('minimize').addEventListener('click', () => {
    ipcRenderer.send('minimizeButton');
});

document.getElementById('maximize').addEventListener('click', () => {
    ipcRenderer.send('maximizeButton');
});

document.getElementById('close').addEventListener('click', () => {
    ipcRenderer.send('closeButton');
});