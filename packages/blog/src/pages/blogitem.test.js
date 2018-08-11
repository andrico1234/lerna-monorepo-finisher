import React from 'react'
import { shallow } from 'enzyme'
import BlogItem from './blogItem'

describe('Layout component', () => {
  const mockProps = {
    pathContext: {
      data: {
        title: "mock title",
        content: "mock content",
        href: "google.com",
      },
    },
  }

  it('should render', () => {
    const wrapper = shallow(<BlogItem {...mockProps} />)

    expect(wrapper)
  })
})