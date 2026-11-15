const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;
let currentPollValue = 0;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    useContentSize: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: false
    },
    autoHideMenuBar: true,
    backgroundColor: '#000000',
    title: 'Piercing Blow Mobile - Windows Edition'
  });

  mainWindow.loadFile('game.html');
}

ipcMain.on('get-poll-value', (event) => {
  event.returnValue = currentPollValue;
  currentPollValue = 0;
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
