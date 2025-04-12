const electron = require('electron');
const BrowserWindow = require('electron').BrowserWindow;
const app = require('electron').app;
const ipcMain = require('electron').ipcMain
const path = require('path');

let mainWindow;

// Function to create the main window of the application
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    frame: false,
    devTools: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
});

// Listen for minimize and close events from the renderer process
ipcMain.on('minimizeButton', () => {
  if (mainWindow) {
    mainWindow.minimize();
  }git 
});

ipcMain.on('maximizeButton', () => {
  console.log("maximize")
  if (mainWindow) {
    mainWindow.maximize();
  }
});

ipcMain.on('closeButton', () => {
  console.log("close")
  if (mainWindow) {
    mainWindow.close();
  }
});