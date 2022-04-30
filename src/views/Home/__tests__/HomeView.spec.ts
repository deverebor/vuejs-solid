import { shallowMount } from '@vue/test-utils'

import HomeView from '../HomeView.vue'

import { HOME_VIEW_MOCK } from './mocks/HomeView.mock'
import { Api } from '@/api/api'

describe('HomeView.vue', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(HomeView, {})
  })

  it('Should render HomeView', () => {
    const HomeHeader = wrapper.findComponent({ name: 'HomeHeader' })
    const TodoList = wrapper.findComponent({ name: 'TodoList' })

    expect(wrapper.exists()).toBeTruthy()
    expect(HomeHeader.exists()).toBeTruthy()
    expect(TodoList.exists()).toBeTruthy()
  })

  it('Should getTodos when HomeView is mounted', async () => {
    const getTodos = jest.spyOn(wrapper.vm, 'getTodos')

    await wrapper.vm.getTodos()

    expect(getTodos).toHaveBeenCalled()
  })

  it('Should todo data has updated when getTodos is called', async () => {
    await jest.spyOn(wrapper.vm, 'getTodos')

    await wrapper.vm.getTodos()

    expect(wrapper.vm.todos[0]).toStrictEqual(HOME_VIEW_MOCK[0])
  })
})
