import React from 'react'
import { useState, useEffect } from 'react'

export default function HeaderOptions({changeCat, catCount}) {

    const [chosenCategory, setChosenCategory] = useState('')

    function handleClick(e) {
        let categories = document.querySelector(".categoryContainer").children

        for(let i = 0; i < categories.length; i ++) {
            categories[i].style.boxShadow = "none"
        }

        setChosenCategory(e.currentTarget.getAttribute("id"))
        e.currentTarget.style.boxShadow = "0px 0px 15px white"
    }

    useEffect(() => {
        changeCat(chosenCategory)
    })

  return (
    <>
    <div className="categoryContainer">
        <div id = "Holiday" className="category" style={{backgroundColor: "rgb(86, 198, 229)"}} onClick={handleClick}><h3>Holiday</h3><h4>{catCount.Holiday} Days</h4></div>
        <div id = "Errands" className="category" style={{backgroundColor: "rgb(196, 142, 227)"}} onClick={handleClick}><h3>Errands</h3><h4>{catCount.Errands} Days</h4></div>
        <div id = "Work" className="category" style={{backgroundColor: "rgb(241, 134, 134)"}} onClick={handleClick}><h3>Work</h3><h4>{catCount.Work} Days</h4></div>
        <div id = "Sick" className="category" style={{backgroundColor: "rgb(130, 233, 125)"}} onClick={handleClick}><h3>Sick</h3><h4>{catCount.Sick} Days</h4></div>
    </div>
        
    </>
  )
}
