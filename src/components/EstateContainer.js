import React from 'react'

class EstateContainer extends React.Component {
    componentDidMount(){
        let idx = this.props.navItems.findIndex(item => item.url === this.props.routeInfo.location.pathname)
        this.props.setActive(idx)
    }

    render(){
        return(
            <div className="estate-container">
                <img src="/images/EstatePainting_Banner.png" alt="banner" style={{ width: '100%', height: 'auto' }} />
                <div className="content">
                    <div style={{ display: 'flex' }}>
                        <div>
                            <h1>Introduction</h1>
                            <p style={{ textAlign: 'justify' }}>Richard Prasad is determined to become the greatest ‘Master of Puzzles’, and he will do anything in his power to claim this title. Recently, it has come to light that Mr. Prasad has stolen a particular set of blueprints containing the Greatest Puzzle Ever, and he has hidden it in a secret and highly guarded area of his Estate. The Black Knight Organization, the original creators of the blueprints, aim to retrieve the masterful puzzle designs from The Estate without alarming Richard. They are able to provide a 60-minute window in which a group of highly skilled agents will infultrate and obtain the documents safely and securely. Will you rise up to the challenge as undercover agents to help set things right?</p>
                        </div>

                        <div>
                            <h1>Your Mission</h1>
                            <p style={{ textAlign: 'justify' }}>You have 60 minutes to search Richard’s mansion in order to find the stolen blueprints and rightfully return them to the Black King, the leader of the Black Knight Organization. This very important task requires incredible teamwork, observational skills, and the ability to think quickly on your toes. Although it may look like an ordinary mansion, Richard's Estate is far from ordinary. It is the home of an extremely passionate puzzle maker, so don't be surpsised if things are not what they seem to be. Remember, this is a stealth mission, so you must not get caught, otherwise the conequences may be dire, in which case... you must have what it takes to escape the room.</p>
                        </div>
                    </div>

                    <div>
                        <h1>Book Now</h1>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EstateContainer