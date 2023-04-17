import React from 'react'

export default function DateBlock({dayOfWeek, day, category, incrementCat}) {



  function changeColor(e) {
    switch(category) {
      case "Holiday":
        e.currentTarget.style.backgroundColor = "#56C6E5"
        e.currentTarget.setAttribute('data-id',category)
        
        break;
        case "Errands":
          e.currentTarget.style.backgroundColor = "#C48EE3"
          e.currentTarget.setAttribute('data-id',category)
          
          break;
          case "Work":
            e.currentTarget.style.backgroundColor = "#F18686"
            e.currentTarget.setAttribute('data-id',category)
            
            break;
            case "Sick":
              e.currentTarget.style.backgroundColor = "#82E97D" 
              e.currentTarget.setAttribute('data-id',category)
              
              break; 
            }

            let allBlocks = document.querySelectorAll('.dateBlock')
            let holidayCount = 0
            let workCount = 0
            let errandCount = 0
            let sickCount = 0

            Array.from(allBlocks).map((block) => {
              if(block.getAttribute('data-id') === 'Holiday') {
                holidayCount++
              } else if (block.getAttribute('data-id') === 'Work') {
                workCount++
              } else if (block.getAttribute('data-id') === 'Errands') {
                errandCount++
              } else if (block.getAttribute('data-id') === 'Sick') {
                sickCount++
              }
            })
            incrementCat(workCount, holidayCount, errandCount, sickCount)
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
