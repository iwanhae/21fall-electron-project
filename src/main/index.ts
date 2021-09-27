import { app, BrowserWindow } from 'electron';

// avoid garbage collection;
let window: BrowserWindow | null = null;

// single instance lock;
const gotTheLock = app.requestSingleInstanceLock();

const createWindow = () => {
  window = new BrowserWindow({
    width: 800,
    height: 600,
  });

  if (process.env.NODE_ENV === 'development') {
    window.webContents.openDevTools({ mode: 'right' });
    window.loadURL('http://localhost:3000/').finally();
  } else {
    window.loadFile('./dist/index.html').finally();
  }

  window.on('closed', () => {
    window = null;
  });
};

if (!gotTheLock) {
  app.exit();
} else {
  app.whenReady().then(() => {
    // console.log('opened!!');
    createWindow();

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        // console.log('opened again!!');
        createWindow();
      }
    });
  });
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
