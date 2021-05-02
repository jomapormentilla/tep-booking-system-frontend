import React from 'react'

const style = {
    marginTop: '10px',
    marginBottom: '10px',
    backgroundColor: '#2e457a',
    color: '#fff',
    padding: '10px',
    width: '1110px'
}

const listItems = [
    `Bookings will only be for private groups. This means you will only be in the room with your party. Please make sure to book the total number of people in your group as the remaining slots will close once you book.`,
    `Customers will wait in the parking lot until the whole party arrives. Once everyone is here, one member will call the phone number and the host will let you into the building.`,
    `Temperature checks will be done and hand sanitizer will be dispensed upon entering.`,
    `We have extended the time between bookings to ensure the room will be properly disinfected.`,
    `Our customers must wear masks at all times when inside The Escape Plan. Gloves are optional and will be provided. You may also bring your own gloves.`,
    `Please reschedule your appointment if you are sick, recently have been sick, or have been exposed to someone who is sick.`,
]

class CovidMessage extends React.Component {
    state = {
        show: false
    }

    toggle = () => {
        this.setState(prevState => ({ show: !prevState.show }))
    }

    renderList = () => {
        return listItems.map((item, id) => <li key={ id }>{ item }</li>)
    }

    render(){
        return(
            <div className="covid-message" style={ style }>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} onClick={ this.toggle }>
                    { this.state.show ? <i class="bi-caret-up-fill"></i> : <i class="bi-caret-down"></i> }
                    <h2 style={{ marginLeft: '10px' }}>Covid Update</h2>
                </div>
                
                <div style={{ height: this.state.show ? 'fit-content' : '0px', opacity: this.state.show ? '1' : '0', zIndex: this.state.show ? '1' : '-1', transitionDuration: '0.5s' }}>
                    <p>We want you to feel safe throughout your entire escape room experience. Here are the steps we are taking to ensure your safety:</p>
                        <ul>
                            { this.renderList() }
                        </ul>
                    <p>We hope that our precautions will help you feel safe so that you can fully enjoy your escape room experience. We thank you for your cooperation and hope to see you soon!</p>
                </div>
            </div>
        )
    }
}

export default CovidMessage