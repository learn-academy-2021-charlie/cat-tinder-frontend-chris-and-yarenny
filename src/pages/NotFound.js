import React, { Component } from 'react'
import notfound from '../assets/notFound.png'

class NotFound extends Component {
    render() {
        return (
            <>
                <img className="not-found"
                        src={notfound}
                        alt="Four cat friends hanging out on a kitchen counter" />
            </>
        )
    }
}

export default NotFound