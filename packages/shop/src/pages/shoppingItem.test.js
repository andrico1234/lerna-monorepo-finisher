import React from 'react'
import { shallow } from 'enzyme'
import ShoppingItem from './shoppingItem'

describe('ShoppingItem component', () => {
  const mockProps = {
    pathContext: {
      data: {
        title: "mock title",
        content: "mock content",
      }
    }
  }

  it('should render', () => {
    const wrapper = shallow(<ShoppingItem {...mockProps} />)

    expect(wrapper)
  })
})