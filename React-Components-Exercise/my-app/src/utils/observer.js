let funcHolder = {}

let observMenu = {
  addObserv: (name, func) => {
    funcHolder[name] = func
  },
  executeObserv: (name, param) => {
    funcHolder[name](param)
  }
}

export default observMenu