import { useForm } from '../../../hooks'
export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  })

  const onFormSubmit = (e) => {
    e.preventDefault()

    if (description.length <= 1) return

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description
    }

    onNewTodo && onNewTodo(newTodo)
    onResetForm()
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type='text'
        placeholder='Que hay que hacer? '
        className='form-control'
        name='description'
        value={description}
        onChange={onInputChange}
      />
      <button className='btn btn-outline-primary mt-1'>Add</button>
    </form>
  )
}
