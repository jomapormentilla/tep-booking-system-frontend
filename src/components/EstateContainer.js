import React from 'react'

class EstateContainer extends React.Component {
    componentDidMount(){
        let idx = this.props.navItems.findIndex(item => item.url === this.props.routeInfo.location.pathname)
        this.props.setActive(idx)
    }
    
    render(){
        return(
            <div className="estate-container">
                Estate
            </div>
        )
    }
}

export default EstateContainer