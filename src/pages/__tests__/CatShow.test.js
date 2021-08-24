import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatShow from '../CatShow'

Enzyme.configure({ adapter: new Adapter() })

describe("When CatShow renders", ()=>{
    let cats = {
          id: 1,
          name: "Mittens",
          age: 5,
          enjoys: "sunshine and warm spots"
        }
    it("a heading with the cat's name is displayed", ()=>{
        const catShow = shallow(<CatShow cat={cats} />)
        const showHeading = catShow.find('h3')
        expect(showHeading.text()).toEqual(`Meow! My name is ${cats.name}!`)
    })
    it("a sentence with age is displayed", ()=>{
        const catShow = shallow(<CatShow cat={cats} />)
        const showHeading = catShow.find('p').first()
        expect(showHeading.text()).toEqual(`I am ${cats.age} years old.`)
    })
    it("a sentence with what the cat enjoys is displayed", ()=>{
        const catShow = shallow(<CatShow cat={cats} />)
        const showHeading = catShow.find('p').at(1)
        expect(showHeading.text()).toEqual(`I enjoy ${cats.enjoys}.`)
    })
})