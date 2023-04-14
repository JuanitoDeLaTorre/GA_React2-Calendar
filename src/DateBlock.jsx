import React from 'react'

export default function DateBlock({dayOfWeek, day, category}) {

  function changeColor(e) {
    console.log(e.currentTarget)
    switch(category) {
      case "Holiday":
        console.log("HOLIDAY!")
        e.currentTarget.style.backgroundColor = "#56C6E5"
        break;
        case "Errands":
          e.currentTarget.style.backgroundColor = "#C48EE3"
          break;
        case "Work":
          e.currentTarget.style.backgroundColor = "#F18686"
          break;
        case "Sick":
          e.currentTarget.style.backgroundColor = "#82E97D"    
          break; 
    }
  }

  return (
    <>
    <div id = {day} className="dateBlock" onClick = {changeColor}>
        <div className="blockDayName">{day}</div>
        <div className="blockDate">{dayOfWeek}</div>
    </div>
    
    </>
    
    
  )
}
