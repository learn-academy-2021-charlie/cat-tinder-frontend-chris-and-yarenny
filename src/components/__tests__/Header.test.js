import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../Header'
Enzyme.configure({ adapter: new Adapter() })

describe('Header has an image', ()=> {
    let header 
    beforeEach(()=>{
        header = shallow(<Header/>)
    })
    it('Header renders content', ()=> {
        // console.log("rendered ")
        const logoImage = header.find('img')
        expect(logoImage.length).toEqual(1)
    })
})