
import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';
import os from 'node:os';
import { randomUUID } from 'node:crypto';
import { Bonjour } from 'bonjour-service';
import started from 'electron-squirrel-startup';

if (started) {
  app.quit();
}

app.setName('SENDIT');

const SERVICE_TYPE = 'sendit';
const SERVICE_PORT = 43127;

let mainWindow: BrowserWindow | null = null;
let bonjour: Bonjour | null = null;
let browser: ReturnType<Bonjour['find']> | null = null;
let publishedService: ReturnType<Bonjour['publish']> | null = null;
let discoveryRunning = false;

const deviceId = randomUUID();
const deviceName = `SENDIT-${os.hostname()}`;

function sendToRenderer(channel: string, data: unknown) {
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send(channel, data);
  }
}

function startDiscovery() {
  if (discoveryRunning) {
    return { success: true, message: 'Discovery already running' };
  }

  try {
    bonjour = new Bonjour({}, (error: Error) => {
  console.error('SENDIT Bonjour error:', error);
});

    // Advertise this Windows device on the local network.
    publishedService = bonjour.publish({
      name: deviceName,
      type: SERVICE_TYPE,
      protocol: 'tcp',
      port: SERVICE_PORT,
      txt: {
        app: 'SENDIT',
        version: '1.0.0',
        deviceId,
        platform: 'windows',
      },
    });

    publishedService.on('error', (error) => {
      console.error('SENDIT publishing error:', error);
    });

    // Look for other SENDIT devices.
    browser = bonjour.find({
      type: SERVICE_TYPE,
      protocol: 'tcp',
    });

    browser.on('up', (service) => {
      const txt = service.txt ?? {};
      const remoteDeviceId = String(txt.deviceId ?? '');

      // Ignore this computer's own advertisement.
      if (!remoteDeviceId || remoteDeviceId === deviceId) {
        return;
      }

      const device = {
        id: remoteDeviceId,
        name: service.name,
        host: service.host,
        port: service.port,
      };

      console.log('SENDIT device found:', device);
      sendToRenderer('sendit:device-found', device);
    });

    browser.on('down', (service) => {
      const remoteDeviceId = String(service.txt?.deviceId ?? '');

      if (remoteDeviceId && remoteDeviceId !== deviceId) {
        console.log('SENDIT device disconnected:', remoteDeviceId);
        sendToRenderer('sendit:device-lost', remoteDeviceId);
      }
    });

    discoveryRunning = true;

    console.log('SENDIT discovery started.');

    return { success: true, message: 'Discovery started' };
  } catch (error) {
    console.error('Could not start SENDIT discovery:', error);
    stopDiscovery();

    return {
      success: false,
      message: 'Could not start nearby discovery',
    };
  }
}

function stopDiscovery() {
  try {
    browser?.stop();
    browser = null;

    publishedService?.stop();
    publishedService = null;

    bonjour?.destroy();
    bonjour = null;

    discoveryRunning = false;

    console.log('SENDIT discovery stopped.');
  } catch (error) {
    console.error('Error stopping SENDIT discovery:', error);
  }

  return { success: true, message: 'Discovery stopped' };
}

ipcMain.handle('sendit:start-discovery', () => startDiscovery());
ipcMain.handle('sendit:stop-discovery', () => stopDiscovery());

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 850,
    minWidth: 800,
    minHeight: 650,
    show: false,
    title: 'SENDIT — Your Transfer Space',
    backgroundColor: '#0B0F2A',
    icon: path.join(app.getAppPath(), 'assets', 'sendit.ico'),
    autoHideMenuBar: true,

    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow?.show();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`),
    );
  }
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('before-quit', () => {
  stopDiscovery();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
