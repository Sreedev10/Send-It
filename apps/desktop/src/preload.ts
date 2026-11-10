
import { contextBridge, ipcRenderer } from 'electron';

export interface NearbyDevice {
  id: string;
  name: string;
  host: string;
  port: number;
}

contextBridge.exposeInMainWorld('sendit', {
  startDiscovery: () => ipcRenderer.invoke('sendit:start-discovery'),
  stopDiscovery: () => ipcRenderer.invoke('sendit:stop-discovery'),

  onDeviceFound: (callback: (device: NearbyDevice) => void) => {
    const listener = (_event: Electron.IpcRendererEvent, device: NearbyDevice) =>
      callback(device);

    ipcRenderer.on('sendit:device-found', listener);

    return () => {
      ipcRenderer.removeListener('sendit:device-found', listener);
    };
  },

  onDeviceLost: (callback: (deviceId: string) => void) => {
    const listener = (_event: Electron.IpcRendererEvent, deviceId: string) =>
      callback(deviceId);

    ipcRenderer.on('sendit:device-lost', listener);

    return () => {
      ipcRenderer.removeListener('sendit:device-lost', listener);
    };
  },
});
