const { app, BrowserWindow, Menu } = require('electron');

const GAME_URL = 'https://pbmobile.app/jogo';

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    useContentSize: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true
    },
    autoHideMenuBar: true,
    backgroundColor: '#000000',
    title: 'Piercing Blow Mobile - Windows Edition'
  });

  Menu.setApplicationMenu(null);
  mainWindow.loadURL(GAME_URL);

  // Keep external/off-site links from hijacking the game window.
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https://pbmobile.app/')) {
      return { action: 'allow' };
    }
    require('electron').shell.openExternal(url);
    return { action: 'deny' };
  });

  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (!url.startsWith('https://pbmobile.app/')) {
      event.preventDefault();
      require('electron').shell.openExternal(url);
    }
  });
}

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
