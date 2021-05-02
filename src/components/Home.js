import React from 'react'

class Home extends React.Component {
    componentDidMount(){
        let idx = this.props.navItems.findIndex(item => item.url === this.props.routeInfo.location.pathname)
        this.props.setActive(idx)
    }

    render(){
        return(
            <div className="home">
                <p style={{ fontSize: '30px', textAlign: 'center' }}>The Escape Plan delivers immersive escape room experiences with attention to detail, design, &amp; storyline. We craft our work to bring out the highest level of entertainment.</p>
            </div>
        )
    }
}

export default Home