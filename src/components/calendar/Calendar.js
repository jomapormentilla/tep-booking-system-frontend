import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

class Calendar extends React.Component {
    calendarRef = React.createRef()

    render(){
        return(
            <div className="calendar">
                <FullCalendar 
                    ref={ this.calendarRef }
                    plugins={[ dayGridPlugin, interactionPlugin ]} 

                    events={[
                        {
                            title: 'Test',
                            start: '2021-04-02T12:00:00',
                            end: '2021-04-02T14:00:00'
                        },
                        {
                            title: 'Test',
                            start: '2021-04-02T14:30:00',
                            end: '2021-04-02T16:30:00'
                        }
                    ]}

                    views={{
                        dayGridMonth: {
                            eventDisplay: 'none'
                        },
                        dayGridDay: {
                            eventDisplay: 'auto'
                        }
                    }}

                    dateClick={(info)=>{
                        console.log(info)
                        this.calendarRef.current.getApi()
                        .changeView('dayGridDay', info.date)
                    }}

                    headerToolbar={{
                        start: 'dayGridMonth,dayGridWeek',
                        center: 'title',
                        end: 'prev,next'
                    }}
                />
            </div>
        )
    }
}

export default Calendar