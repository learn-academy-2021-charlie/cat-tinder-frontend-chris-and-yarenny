import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import CatEdit from './pages/CatEdit'
import CatIndex from './pages/CatIndex'
import CatNew from './pages/CatNew'
import CatShow from './pages/CatShow'
import NotFound from './pages/NotFound'
import mockCats from './mockCats.js'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'




class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: mockCats
    }
  }


  render() {
    return (
      <Router className="body">
        <Header />
       
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/catedit" component={CatEdit} />
          <Route path="/catindex" component={CatIndex} />
          <Route path="/catnew" component={CatNew} />
          <Route path="/catshow" component={CatShow} />
          <Route component={NotFound} />
        </Switch>
        
        <Footer />
      </Router>
    )
  }
}

export default App;
