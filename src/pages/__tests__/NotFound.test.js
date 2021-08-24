import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from '../NotFound'

Enzyme.configure({ adapter: new Adapter() })

describe('NotFound has an image', ()=> {
    let notFound 
    beforeEach(()=>{
        notFound = shallow(<NotFound/>)
    })
    it('NotFound renders content', ()=> {
        // console.log("rendered ")
        const logoImage = notFound.find('img')
        expect(logoImage.length).toEqual(1)
    })
})