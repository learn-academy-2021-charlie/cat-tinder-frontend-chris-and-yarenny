import React, { Component } from 'react'
import '../App.css'
import catFriends from '../assets/catFriends.jpeg'

class Header extends Component {
    render() {
        return (
            <>
                <div className="logo">
                <h1>Cat Tinder</h1>
                    {/* <img className="pictures"
                        src={catFriends}
                        alt="Four cat friends hanging out on a kitchen counter" /> */}
                </div>
            </>
        )
    }
}

export default Header