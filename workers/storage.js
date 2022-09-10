const fs = require('fs')
const path = require('path')

let get = key => {
  let pth = path.join(__dirname, '../userdata/storage.json')

  if (fs.existsSync(pth)) {
    let rawdata = fs.readFileSync(pth)

    if (rawdata != '') {
      let data = JSON.parse(rawdata)
      return data[key]
    } else return null
  } else {
    return null
  }
}

let set = (key, value) => {
  let pth = path.join(__dirname, '../userdata/storage.json')

  let data = {}
  if (fs.existsSync(pth)) {
    let rawdata = fs.readFileSync(pth)
    if (rawdata != '') data = JSON.parse(rawdata)
  }
  data[key] = value

  fs.writeFileSync(pth, JSON.stringify(data))
  return true
}

const exportData = {
  set: set,
  get: get
}

module.exports = exportData
