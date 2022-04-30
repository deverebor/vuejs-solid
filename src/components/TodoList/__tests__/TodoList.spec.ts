import { shallowMount } from '@vue/test-utils'

import TodoList from '../TodoList.vue'

describe('TodoList.vue', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(TodoList, {
      slots: {
        default: '<div><span>Todo 1</span></div>'
      }
    })
  })

  it('Should render TodoList', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('Should render TodoCard and TodoRow', () => {
    expect(wrapper.html()).toContain('<div><span>Todo 1</span></div>')
  })

  it('Should render at least one TodoCard', () => {
    const todoListContainer = wrapper.findAll('.todo-list__container')

    expect(todoListContainer.length).toBeGreaterThan(0)
  })
})
