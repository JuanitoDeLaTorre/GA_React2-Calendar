import "./index.css";
import Calendar from "./Calendar";
import HeaderOptions from "./HeaderOptions";
import { useState } from "react";

export default function App() {

  const [chosenCategory,setChosenCategory] = useState('')

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

  return (
    <div className="App">
      <h1>React Calendar</h1>
      <HeaderOptions changeCat = {handleSetCategory}/>
      <Calendar  category = {chosenCategory} days = {days} dates = {dates}/>

    </div>
  );
}
