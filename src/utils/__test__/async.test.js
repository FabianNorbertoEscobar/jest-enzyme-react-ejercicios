/* eslint-disable jest/no-conditional-expect */
import { getDataCallback, getDataPromise, getDataPromiseError, getUsers } from '../async'

describe('Haciendo test a operaciones asinctronas', () => {

  test('Haciendo test a callback', (done) => {
    getDataCallback((name) => {
      expect(name).toBe('Fabian Escobar')
      done()
    })
  })

  test('Haciendo test a promesa', (done) => {
    getDataPromise()
      .then((name) => {
        expect(name).toBe('Fabian Escobar')
        done()
      })
  })

  test('Haciendo test a promesa con expect', () => {
    return expect(getDataPromise()).resolves.toBe('Fabian Escobar')
  })

  test('Haciendo test a promesa rechazada', (done) => {
    getDataPromiseError()
      .then((name) => {
      })
      .catch((error) => {
        expect(error).toBe('Error')
        done()
      })
  })

  test('Haciendo test a promesa rechazada con expect', () => {
    return expect(getDataPromiseError()).rejects.toBe('Error')
  })

  test('Haciendo test a promesa resuelta con async await', async () => {
    const name = await getDataPromise()
    expect(name).toBe('Fabian Escobar')
  })

  test('Haciendo test a promesa rechazada con async await', async () => {
    try {
      const name = await getDataPromiseError()
      expect(name).toBe('Fabian Escobar')
    } catch (error) {
      expect(error).toBe('Error')
    }
  })

  test('Probando promesa con solicitud HTTP', async () => {
    const user = await getUsers()
    expect(user).toHaveProperty('username')
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('email')
  })

})
