const { contextBridge, ipcMain, ipcRenderer } = require('electron')

let indexBridge = {
    doSomething: async () => {
        var result = await ipcRenderer.invoke("doSomething");
    },
    doSomethingFetch: async() => {
        var result = await ipcRenderer.invoke("doSomethingFetch");
        var whattodo = document.getElementById("whattodo");
        whattodo.innerText = JSON.parse(result).activity;
    },
    doSomethingAxios: async() => {
        var result = await ipcRenderer.invoke("doSomethingAxios");
        var whattodo = document.getElementById("whattodo");
        whattodo.innerText = JSON.parse(result).activity;
    },
    doSomethingGot: async() => {
        var result = await ipcRenderer.invoke("doSomethingAxios");
        var whattodo = document.getElementById("whattodo");
        whattodo.innerText = JSON.parse(result).activity;
    }
}

ipcRenderer.on("gotData", (event, json) => {
    console.log(json);

    var whattodo = document.getElementById("whattodo");
    whattodo.innerText = JSON.parse(json).activity;
})

contextBridge.exposeInMainWorld("indexBridge", indexBridge);
