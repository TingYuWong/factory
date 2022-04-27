// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

import { RadioInput, TextInput } from '../../DataModel'

describe('Test RadioInput', () => {
  it('return correct validation message', () => {
    let radioInputItem = new RadioInput({ type: 'radio', title: 'test' })
    expect(radioInputItem.validate()).toMatch('RadioInput validate: ')
  })
})

describe('Test TextInput', () => {
  it('return correct validation message', () => {
    let radioInputItem = new TextInput({ type: 'radio', title: 'test' })
    expect(radioInputItem.validate()).toMatch('TextInput validate: ')
  })
})
