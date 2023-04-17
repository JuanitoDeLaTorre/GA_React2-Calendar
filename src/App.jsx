import "./index.css";
import Calendar from "./Calendar";
import HeaderOptions from "./HeaderOptions";
import { useState } from "react";
import moon from "./moon.png"
import sun from "./sunny.png"

export default function App() {

  const [chosenCategory,setChosenCategory] = useState('')
  const [mode, setMode] = useState('Light Mode')
  const [modeImg, setModeImg] = useState(sun)
  const [catCount, setCatCount] = useState({Holiday: 0, Errands: 0, Work: 0, Sick: 0})

  function handleSetCategory(string) {
    setChosenCategory(string)
  }

  const days = [
    {
      name: "Sunday"
    },
    {
      name: "Monday"
    },
    {
      name: "Tuesday"
    },
    {
      name: "Wednesday"
    },
    {
      name: "Thursday"
    },
    {
      name: "Friday"
    },
    {
      name: "Saturday"
    },
  ]

  // The following creates an array of numbers from [1..28]
  const dates = Array.from({length: 28}, (x, i) => i + 1)

  function handleSwitchMode() {
    if (modeImg === moon) {
        document.documentElement.style.setProperty('--backColor', '#393939')
        document.documentElement.style.setProperty('--globalText', '#FFFFFF')
        document.documentElement.style.setProperty('--borderColor', 'solid #FFFFFF 2px')
        setMode('Light Mode')
        setModeImg(sun)
    } else {
        document.documentElement.style.setProperty('--backColor', '#FFFFFF')
        document.documentElement.style.setProperty('--globalText', '#393939')
        document.documentElement.style.setProperty('--borderColor', 'solid #393939 2px')
        setMode('Dark Mode')
        setModeImg(moon)
    }
  }

  function handleIncCount(category) {

    switch (category) {
      case "Work":
        setCatCount(() => {return {...catCount, Work: catCount.Work + 1}})
        break;
      case "Holiday":
        setCatCount(() => {return {...catCount, Holiday: catCount.Holiday + 1}})
        break;
      case "Errands":
        setCatCount(() => {return {...catCount, Errands: catCount.Errands + 1}})
        break;
      case "Sick":
        setCatCount(() => {return {...catCount, Sick: catCount.Sick + 1}})
        break;
    }
  }

  function updateCatCount(WorkCount, HolidayCount, ErrandsCount, SickCount) {
    setCatCount(()=> {
      return {...catCount, Work: WorkCount, Holiday: HolidayCount, Errands: ErrandsCount, Sick: SickCount}
    })
  }

  return (
    <div className="App">
      <h1>React Calendar</h1>
      {/* <button onClick={() => {updateCatCount(4,2,0,69)}}>PUSH ME</button> */}
      <img src={modeImg} onClick={handleSwitchMode} class = "mode" alt = ''/>
      <HeaderOptions catCount = {catCount} changeCat = {handleSetCategory}/>
      <Calendar   catCount = {updateCatCount} category = {chosenCategory} days = {days} dates = {dates}/>

    </div>
  );
}
