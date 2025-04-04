const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    frame: true,
  })
})