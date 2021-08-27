import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatEdit from '../CatEdit'

Enzyme.configure({ adapter: new Adapter() })

describe("When CatEdit renders", () => {
    it("Should render a label and text", () => {
        const catEdit = shallow(<CatEdit/>)
        const label = catEdit.find("Label")
    expect(label.length).toEqual(3)
    })
    it("Should render a input and text", () => {
        const catEdit = shallow(<CatEdit/>)
        const input = catEdit.find("Input")
    expect(input.length).toEqual(3)
    })
})