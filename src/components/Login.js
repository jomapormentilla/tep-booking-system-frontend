import React from 'react'

class Login extends React.Component {
    componentDidMount(){
        let idx = this.props.navItems.findIndex(item => item.url === this.props.routeInfo.location.pathname)
        this.props.setActive(idx)
    }

    render(){
        return(
            <div className="login">
                <div className="content">
                    Testing login
                </div>
            </div>
        )
    }
}

export default Login