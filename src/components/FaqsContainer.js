import React from 'react'

class FaqsContainer extends React.Component {
    componentDidMount(){
        let idx = this.props.navItems.findIndex(item => item.url === this.props.routeInfo.location.pathname)
        this.props.setActive(idx)
    }
    
    render(){
        return(
            <div className="faqs-container">

            </div>
        )
    }
}

export default FaqsContainer