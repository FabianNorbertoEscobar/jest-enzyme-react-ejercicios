import { createStore } from '../objects'

describe('Test a Objetos', () => {

  test('Agregar un item en store', () => {

    const store = createStore()

    store.addItem({
      name: 'Fabian',
      id: 1,
      country: 'Argentina'
    })

    expect(store.getStore()[0]).toEqual({
      name: 'Fabian',
      id: 1,
      country: 'Argentina'
    })

  })

  test('Buscar un item por el id', () => {

    const store = createStore()

    store.addItem({
      name: 'Fabian',
      id: 1,
      country: 'Argentina'
    })

    expect(store.getById(1)).toEqual({
      name: 'Fabian',
      id: 1,
      country: 'Argentina'
    })

    expect(store.getById(1)).toMatchObject({
      name: 'Fabian',
      id: 1
    })

    expect(store.getById(1)).toHaveProperty('name', 'Fabian')

  })

})
