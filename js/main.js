// JavaScript to ensure that Electron is used for the framework of the project

const {app, BrowserWindow} = require ('electron')


// Creates the main browser window
function createWindow () {
    const win = new BrowserWindow({
        x: 0,
        y: 0,
        dark: true,
        frame: false,
        webPreferences: {
            nodeIntegration: false,
        },
        background: "#000000"
    })
    // Loads the main index file 
    win.loadFile('C:/Users/jamie/OneDrive/My Documents/University/Year Three/Magic Mirror - Double Project/MagicMirrorFiles/MagicMirror/index.html')

    win.webContents.on('dom-ready', (event)=> {
      let css = '*{cursor: none !important; }';
      win.webContents.insertCSS(css);
    });
  

    //win.webContents.openDevTools() - used for debugging

    win.setFullScreen(true)

  }
  
  app.whenReady().then(createWindow)
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })

  // used to ensure the PIR sensor code is loaded when everything else is loaded

  let {PythonShell} = require('python-shell');

  PythonShell.run('pir.py', null, function (err)
  {
    if (err) throw err;
    console.log('finished');
  });

  // Hiding the cursor once the page is loaded 
  var x = require('hide-cursor')

  x.hide();

  // GOOGLE ASSISTANT IS ALSO IN THE FLODER HOWEVER DUE TO VARIOUS BUGS AMAZON 
  // ALEXA IS USED INSTEAD - GOOGLE ASSISTANT IS KEPT AS A BACKUP 
  

  
  





