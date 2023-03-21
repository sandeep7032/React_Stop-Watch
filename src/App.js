import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import ButtonComp from './components/ButtonComp';

function App() {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0, ms: 0 })
  const [int, setInt] = useState(0)
  var updatedHours = time.h
  var updatedMinutes = time.m
  var updatedSeconds = time.s
  var updatedMiliSec = time.ms

  const Run = () => {
    if (updatedMiliSec === 100) {
      updatedSeconds++
      updatedMiliSec = 0
    }
    if (updatedSeconds === 60) {
      updatedMinutes++
      updatedSeconds = 0
    }
    if (updatedMinutes === 60) {
      updatedHours++
      updatedMinutes = 0
    }
    updatedMiliSec++
    return setTime({ h: updatedHours, m: updatedMinutes, s: updatedSeconds, ms: updatedMiliSec })
  }
  const Start = () => {
    return setInt(setInterval(() => {
      Run()
    }, 10))
  }
  const Pause = () => {
    return setInt(clearInterval(int))
  }
  const Reset = () => {
    setInt(clearInterval(int))
    return setTime({ h: 0, m: 0, s: 0, ms: 0 })
  }

  return (
    <div className="App">
      <Display time={time} />
      <ButtonComp Start={Start} name="start" />
      <ButtonComp Start={Pause} name="pause" />
      <ButtonComp Start={Reset} name="reset" />
    </div>
  );
}

export default App;
