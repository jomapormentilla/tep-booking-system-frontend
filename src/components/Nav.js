import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
    renderList = () => {
        return this.props.navItems.map(item => {
            let active = item.active ? 'nav-active' : null
            return <Link key={ item.id } to={ item.url }><li className={ active }>{ item.name }</li></Link>
        })
    }

    render(){
        return(
            <div className="nav">
                <div style={{ padding: '15px' }}>
                    <img src="/images/EscapeLogo_md_white.png" alt="Logo" style={{ width: '100%' }} />
                </div>
                <ul>
                    { this.renderList() }
                </ul>
            </div>
        )
    }
}

export default Nav