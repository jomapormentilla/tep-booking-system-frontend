import React from 'react'

const style = {
    flex: '1 0 30%',
    minWidth: '150px',
    fontSize: '15px',
    border: 'solid 1px #fff',
    borderRadius: '10px',
    padding: '10px',
    margin: '5px',
    backgroundColor: '#21345b'
}

class CovidBox extends React.Component {
    render(){
        return(
            <div className="covid-box" style={ style }>
                { this.props.data }
            </div>
        )
    }
}

export default CovidBox