import React from 'react'

class AbigailContainer extends React.Component {
    componentDidMount(){
        let idx = this.props.navItems.findIndex(item => item.url === this.props.routeInfo.location.pathname)
        this.props.setActive(idx)
    }
    
    render(){
        return(
            <div className="abigail-container">
                Abigail
            </div>
        )
    }
}

export default AbigailContainer