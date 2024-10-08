import { app, BrowserWindow, ipcMain } from "electron";
// import { enableLiveReload } from 'electron-compile';
import { getDataSource } from "./data/dbConnect";
import { Animals } from "./data/animal.schema";
import { Locations } from "./data/location.schema";

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}


let mainWindow: BrowserWindow | null;

const createWindow = async () => {
  

  
  const dataSource = await getDataSource();
  
  // Create the browser window.
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      contextIsolation: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
    }
  });
  
  // Animal queries
  const animalRepo = dataSource.getRepository(Animals);
  ipcMain.on('get-animals', async (event: any) => {
    try {
      event.returnValue = await animalRepo.find();
    } catch (err) {
      throw err;
    }
  });

  ipcMain.on('add-animal', async (event: any, animal: Animals) => {
    try {
      const newAnimal = await animalRepo.create(animal);
      await animalRepo.save(newAnimal);
      event.returnValue = await animalRepo.find();
    } catch (err) {
      throw err;
    }
  });

  ipcMain.on('delete-animal', async (event: any, id: number) => {
    try {
      await animalRepo.delete(id);
      event.returnValue = await animalRepo.find();
    } catch (err) {
      throw err;
    }
  });

  ipcMain.on('update-animal', async (event: any, args: {id: number, param: object}) => {
    try {
      await animalRepo.update({id: args.id}, args.param);
      event.returnValue = await animalRepo.find();
    } catch (err) {
      throw err;
    }
  });


  // Location queries
  const locationRepo = dataSource.getRepository(Locations);
  ipcMain.on('get-locations', async (event: any) => {
    try {
      event.returnValue = await locationRepo.find();
    } catch (err) {
      throw err;
    }
  });

  ipcMain.on('add-location', async (event: any, location: Locations) => {
    try {
      const newLocation = await locationRepo.create(location);
      await locationRepo.save(newLocation);
      event.returnValue = await locationRepo.find();
    } catch (err) {
      throw err;
    }
  });

  ipcMain.on('delete-location', async (event: any, id: number) => {
    try {
      await locationRepo.delete(id);
      event.returnValue = await locationRepo.find();
    } catch (err) {
      throw err;
    }
  });

  ipcMain.on('update-location', async (event: any, args: {id: number, param: object}) => {
    try {
      await locationRepo.update({id: args.id}, args.param);
      event.returnValue = await locationRepo.find();
    } catch (err) {
      throw err;
    }
  });

  
  // mainWindow.loadFile(path.join(__dirname, '../renderer/main_window/index.html'));
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

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