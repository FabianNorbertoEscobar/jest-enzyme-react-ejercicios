import { setTimeout } from 'timers'

export const getDataCallback = (callback) => {
  // Solicitud http a un API
  const name = 'Fabian Escobar'

  setTimeout(() => {
    callback(name)
  }, 300)
}

export const getDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Fabian Escobar')
    }, 300)
  })
}

export const getDataPromiseError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error')
    }, 300)
  })
}

export const getUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/5')
  const user = await res.json()

  return user
}