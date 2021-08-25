import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatNew from '../CatNew'

Enzyme.configure({ adapter: new Adapter() })

describe("When CatNew renders", () => {
    it("Should render a label and text", () => {
        const catNew = shallow(<CatNew/>)
        const label = catNew.find("Label")
    expect(label.length).toEqual(3)
    })
    it("Should render a input and text", () => {
        const catNew = shallow(<CatNew/>)
        const input = catNew.find("Input")
    expect(input.length).toEqual(3)
    })
})