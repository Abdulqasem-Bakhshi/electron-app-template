const electron = require('electron');
const BrowserWindow = require('electron').BrowserWindow;
const app = require('electron').app;
const path = require('path');

// Function to create the main window of the application
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    frame: true
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));
};

app.on("ready", createWindow);