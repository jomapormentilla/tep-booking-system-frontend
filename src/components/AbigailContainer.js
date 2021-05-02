import React from 'react'

import Calendar from './calendar/Calendar'

class AbigailContainer extends React.Component {
    componentDidMount(){
        let idx = this.props.navItems.findIndex(item => item.url === this.props.routeInfo.location.pathname)
        this.props.setActive(idx)
    }

    render(){
        return(
            <div className="abigail-container">
                <img src="/images/abigailsBanner.jpeg" alt="banner" style={{ width: '100%', height: 'auto' }} />
                <div className="content">
                    <div style={{ display: 'flex' }}>
                        <div>
                            <h1>Introduction</h1>
                            <p style={{ textAlign: 'justify' }}>A tragedy has occurred in the Pierson household involving little Abigail, and all those closest to her are being questioned by the court. Filled with grief, shock, and a desire for truth, the family's loyal butler now requests your immediate assistance to unravel the facts behind this puzzle-packed mystery. The police are at a dead end because their primary investigator has gone missing while in pursuit of evidence inside Abigail's Playroom.</p>
                        </div>

                        <div>
                            <h1>Your Mission</h1>
                            <p style={{ textAlign: 'justify' }}>As the butler’s secret investigators, it is up to you to discover the truth and bring justice to this case. All primary suspects are about to be questioned, and you have one hour to search Abigail's Playroom for evidence before the court's decision is finalized. Beware, however, as the playroom is designed to be Mr. Pierson's "greatest puzzle" ever, in which case... you must have what it takes to escape the room.</p>
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

export default AbigailContainer