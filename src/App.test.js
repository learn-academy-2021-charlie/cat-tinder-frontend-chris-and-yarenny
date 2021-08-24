import React from 'react'
import App from './App';
import Enzyme, {shallow} from 'enzyme'
import Home from './pages/Home'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter()})


describe('when app renders', ()=>{
  it('displays a header and footer', ()=>{
    const renderedApp = shallow(<App/>)
    const renderedHeader = renderedApp.find("Header")
    const renderedFooter = renderedApp.find("Footer")
    expect(renderedHeader.length).toEqual(1)
    expect(renderedFooter.length).toEqual(1)
  })
  it('provides a route"/" to the home component', ()=>{
    const renderedApp = shallow(<App/>)
    const renderedHomeRoute = renderedApp.find('[path="/"]')
    expect(renderedHomeRoute.props().component).toEqual(Home)
  })
 
})