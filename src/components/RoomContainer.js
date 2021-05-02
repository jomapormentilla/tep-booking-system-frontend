import React from 'react'
import Calendar from './calendar/Calendar'

class RoomContainer extends React.Component {
    componentDidMount(){
        let idx = this.props.navItems.findIndex(item => item.url === this.props.routeInfo.location.pathname)
        this.props.setActive(idx)
    }

    render(){
        return(
            <div className="room-container">
                <img src={ this.props.room.image_url } alt="banner" style={{ width: '100%', height: 'auto' }} />
                <div className="content">
                    <div style={{ display: 'flex' }}>
                        <div>
                            <h1>Introduction</h1>
                            <p style={{ textAlign: 'justify' }}>{ this.props.room.introduction }</p>
                        </div>

                        <div>
                            <h1>Your Mission</h1>
                            <p style={{ textAlign: 'justify' }}>{ this.props.room.mission }</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h1>Book Now</h1>
                            <div>
                            </div>
                        </div>
                    </div>
                    <Calendar />
                </div>
            </div>
        )
    }
}

export default RoomContainer