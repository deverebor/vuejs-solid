import { shallowMount } from '@vue/test-utils'

import TodoCard from '../TodoCard.vue'

describe('TodoCard.vue', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(TodoCard, {
      props: {
        todoCompleted: false,
        todoTitle: 'test'
      }
    })
  })

  it('Should render TodoCard', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('Should render TodoCard with todoCompleted and todoTitle', async () => {
    expect(wrapper.props().todoCompleted).toBeFalsy()
    expect(wrapper.props().todoTitle).toBeTruthy()

    wrapper.setProps({
      todoCompleted: true,
      todoTitle: 'Todo 1'
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.props().todoCompleted).toStrictEqual(
      wrapper.props().todoCompleted
    )
    expect(wrapper.props().todoTitle).toStrictEqual(wrapper.props().todoTitle)
  })
})
