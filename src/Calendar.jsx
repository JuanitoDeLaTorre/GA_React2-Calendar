import React from 'react'
import DateBlock from './DateBlock'

export default function Calendar({category, days, dates}) {
    

  return (
    
    <div className="calendarContainer">

        {dates.map((i) => {

            return <DateBlock dayOfWeek={days[(i+6)%7].name} key = {i} day = {i} category = {category}/>
            
        })}

    </div>
  )
}
