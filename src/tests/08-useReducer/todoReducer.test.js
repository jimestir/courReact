import { todoReducer } from '../../exercise/08-useReducer/todoReducer'
describe('test in todoReducer', () => {
  const initialState = [
    {
      id: 123,
      description: 'Demo todo',
      done: false
    }
  ]

  test('should return object initial', () => {
    const newState = todoReducer(initialState, {})
    expect(newState).toBe(initialState)
  })

  test('should add a todo', () => {
    const action = {
      type: '[Todo] add todo',
      payload: {
        id: 2,
        description: 'todo number #2',
        done: false
      }
    }
    const newState = todoReducer(initialState, action)
    console.log(newState)

    expect(newState.length).toBe(2)
    expect(newState).toContain(action.payload)
    expect(newState[1].description).toBe(action.payload.description)
  })

  test('should delete a todo', () => {
    const action = {
      type: '[Todo] delete todo',
      payload: 123
    }

    const newState = todoReducer(initialState, action)

    expect(newState.length).toBe(0)
  })

  test('should of change the state todo', () => {
    const action = {
      type: '[Todo] toggle todo',
      payload: 123
    }

    const newState = todoReducer(initialState, action)
    expect(newState[0].done).toBeTruthy()

    const newState2 = todoReducer(newState, action)
    expect(newState2[0].done).toBeFalsy()
  })
})
