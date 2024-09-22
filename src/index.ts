import { app, BrowserWindow, ipcMain } from "electron";
// import { enableLiveReload } from 'electron-compile';
// import { getDataSource } from "./dbConnect";
// import { Animals } from "./animal.schema";
import path from 'path';


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}


let mainWindow: BrowserWindow | null;

const createWindow = async () => {
  

  
  // const dataSource = await getDataSource();
  // const animalRepo = dataSource.getRepository(Animals);

  // Create the browser window.
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // ipcMain.on('get-animals', async (event: any, ...args: any[]) => {
  //   try {
  //     console.log("getting animals");
  //     event.returnValue = await animalRepo.find();
  //   } catch (err) {
  //     throw err;
  //   }
  // });

  
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", () => {
  createWindow();

});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

app.disableHardwareAcceleration();
// This code is to circumvent an where EGL Driver message shows up 
// issue: https://github.com/electron/electron/issues/43415