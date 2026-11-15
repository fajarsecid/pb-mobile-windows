const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('PBAndroid', {
  poll: () => {
    return ipcRenderer.sendSync('get-poll-value');
  },
  getHwid: () => {
    return 'WIN-PC-' + process.arch + '-' + require('os').hostname();
  }
});

window.addEventListener('DOMContentLoaded', () => {
  if (!navigator.vibrate) {
    navigator.vibrate = (pattern) => {
      if (navigator.getGamepads) {
        const gamepads = navigator.getGamepads();
        for (let gp of gamepads) {
          if (gp && gp.vibrationActuator) {
            gp.vibrationActuator.playEffect('dual-rumble', {
              startDelay: 0,
              duration: Array.isArray(pattern) ? pattern[0] : pattern,
              weakMagnitude: 0.5,
              strongMagnitude: 0.5
            }).catch(() => {});
          }
        }
      }
    };
  }
});
