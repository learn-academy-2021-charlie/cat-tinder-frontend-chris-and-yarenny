import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from '../Footer'
Enzyme.configure({ adapter: new Adapter() })

describe('Footer has an image', ()=> {
    let footer 
    beforeEach(()=>{
        footer = shallow(<Footer/>)
    })
    it('Footer renders content', ()=> {
        // console.log("rendered ")
        const text = footer.find('h4')
        expect(text.length).toEqual(1)
    })
})