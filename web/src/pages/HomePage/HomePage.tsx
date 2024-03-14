import React, { useState, useEffect } from 'react'

import { Metadata } from '@redwoodjs/web'

import PomoBtn from 'src/components/PomoBtn/PomoBtn'

const HomePage = () => {
  const timers = {
    pomodoro: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 10 * 60,
  }

  const [totalSeconds, setTotalSeconds] = useState(timers.pomodoro)
  const [isRunning, setIsRunning] = useState(false)
  const [timerSelected, setTimerSelected] = useState('pomodoro')

  useEffect(() => {
    let timer
    if (isRunning) {
      timer = setInterval(() => {
        if (totalSeconds > 0) {
          setTotalSeconds((prevTotalSeconds) => prevTotalSeconds - 1)
        } else {
          clearInterval(timer)
          setIsRunning(false)
        }
      }, 1000)
    }

    return () => clearInterval(timer)
  }, [totalSeconds, isRunning])

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`
  }

  const toggleTimer = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning)
  }

  const selectTimer = (timer) => {
    setTimerSelected(timer)
    setTotalSeconds(timers[timer])
  }

  return (
    <>
      <Metadata title="Home" description="Home page" />
      <div className="flex w-full pt-20">
        <div className="mx-auto rounded-lg bg-red-400 p-8">
          <div className="space-between mx-auto flex ">
            {Object.keys(timers).map((timer) => (
              <PomoBtn
                key={timer}
                isSelected={timerSelected === timer}
                onClickFunc={() => selectTimer(timer)}
                btnText={timer}
              />
            ))}
          </div>
          <div className="text-center text-9xl font-bold text-slate-50">
            {formatTime(totalSeconds)}
          </div>
          <div className="flex justify-center p-8">
            <button
              onClick={toggleTimer}
              className="rounded-md bg-red-600 p-4 text-4xl font-black text-white hover:bg-red-900"
            >
              {isRunning ? 'STOP' : 'START'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
