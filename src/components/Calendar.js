import React from 'react'
import DatePicker from 'react-date-picker'

class Calendar extends React.Component {

    state = {
        date: [new Date()]
    }

    render() {
        const date = this.state.date;
        
        console.log("render " + date);
        return(
            <div>
                <DatePicker value={date[date.length-1]} onChange={this.onChangeDate}/>
                {date.map(singleDate => 
                    <div key={this.uniqueKey(singleDate)}>{singleDate.toString()}</div>
                )}
            </div>
        )
    }

    onChangeDate = (date) => {
        const updatedDate = this.state.date;
        updatedDate.push(date);
        this.setState({date: updatedDate});
        console.log(this.state.date);
    }
    uniqueKey = (date) => date.getDate() + date.getHours() + date.getDay();
}

export default Calendar