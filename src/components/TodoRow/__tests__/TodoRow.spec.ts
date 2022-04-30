import { shallowMount } from '@vue/test-utils'

import TodoRow from '../TodoRow.vue'
import { ITodos } from '@/helpers/interfaces/ITodos'

describe('TodoRow.vue', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(TodoRow, {
      props: {
        todo: {
          id: 1,
          title: 'Todo 1',
          completed: false
        } as ITodos
      }
    })
  })

  it('Should render TodoRow', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('Should render TodoRow with todoCompleted and todoTitle', async () => {
    expect(wrapper.props().todo.id).toBeTruthy()
    expect(wrapper.props().todo.title).toBeTruthy()
    expect(wrapper.props().todo.completed).toBeFalsy()

    wrapper.setProps({
      todo: {
        id: 2,
        title: 'Todo 1',
        completed: true
      }
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.props().todo.id).toBe(2)
    expect(wrapper.props().todo.title).toStrictEqual(wrapper.props().todo.title)
    expect(wrapper.props().todo.completed).toStrictEqual(
      wrapper.props().todo.completed
    )
  })

  it('Should add new class when todo is completed', async () => {
    const todoRowCompleted = wrapper.findAll('.todo-row__completed')

    expect(wrapper.props().todo.title).toBeTruthy()
    expect(wrapper.props().todo.completed).toBeFalsy()

    wrapper.setProps({
      todo: {
        title: 'Todo 1',
        completed: true
      }
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.props().todo.title).toStrictEqual(wrapper.props().todo.title)
    expect(wrapper.props().todo.completed).toStrictEqual(
      wrapper.props().todo.completed
    )
    expect(todoRowCompleted).toBeTruthy()
  })
})
