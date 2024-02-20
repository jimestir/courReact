import { render, screen } from '@testing-library/react'
import { TodoItem } from '../../../exercise/08-useReducer/TodoList/TodoItem'

describe('Test in component <TodoItem/>', () => {
  const todo = {
    id: 1,
    description: 'the rock of soul',
    done: false
  }

  const onDeleteTodoMock = jest.fn()
  const onToggleTodoMock = jest.fn()

  beforeEach(() => jest.clearAllMocks())

  test('should show the todo pending completion', () => {
    render(
      <TodoItem
        {...todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />)

    const liElement = screen.getByRole('listitem')
    expect(liElement.className).toBe('list-group-item d-flex justify-content-between align-items-center')

    const spanElement = screen.getByLabelText('span')
    expect(spanElement.className).toContain('align-self-center')
  })
})
