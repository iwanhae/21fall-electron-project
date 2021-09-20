import { app, BrowserWindow } from 'electron';
import path from 'path';

// avoid garbage collection;
let window: BrowserWindow | null = null;

const gotTheLock = app.requestSingleInstanceLock();

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  require('electron-reload')(__dirname, {
    electron: path.resolve(__dirname, '../node_modules/.bin/electron'),
    // window path?
    forceHardReset: true,
    hardResetMethod: 'exit',
  });
}

const createWindow = () => {
  window = new BrowserWindow({
    width: 800,
    height: 600,
  });

  window.loadFile('./dist/index.html').finally();

  if (process.env.NODE_ENV === 'development') {
    window.webContents.openDevTools({ mode: 'right' });
  }

  window.on('closed', () => {
    window = null;
  });
};

// 한개 앱만을 실행하기 위한 flag
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
