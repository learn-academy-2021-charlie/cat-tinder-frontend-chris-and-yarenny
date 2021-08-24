import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from '../Home'

Enzyme.configure({ adapter: new Adapter() })

describe('Home has an image', ()=> {
    let home 
    beforeEach(()=>{
        home = shallow(<Home/>)
    })
    it('Home renders content', ()=> {
        // console.log("rendered ")
        const text = home.find('h3')
        expect(text.length).toEqual(1)
    })
})