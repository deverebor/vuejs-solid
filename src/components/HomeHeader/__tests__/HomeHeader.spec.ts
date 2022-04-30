import { shallowMount } from '@vue/test-utils'

import HomeHeader from '../HomeHeader.vue'

describe('HomeHeader.vue', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(HomeHeader, {})
  })

  it('Should render HomeHeader', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
