import React, { Component } from 'react'
import '../App.css'
import catLovers from '../assets/catLovers.gif'

class Header extends Component {
    render() {
        return (
            <>
                <div className="logo">
                    <img className="pictures"
                        src={catLovers}
                        alt="Four cat friends hanging out on a kitchen counter" />
                </div>
            </>
        )
    }
}

export default Header