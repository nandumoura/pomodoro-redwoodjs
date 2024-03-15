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
  const colorSelected = `${
    timerSelected === 'pomodoro'
      ? 'bg-red-400'
      : timerSelected === 'shortBreak'
      ? 'bg-emerald-400'
      : timerSelected === 'longBreak'
      ? 'bg-slate-400'
      : 'bg-teal-400'
  }`

  const containerClassName = `mx-auto rounded-lg p-8 ${colorSelected}`

  return (
    <>
      <Metadata title="Home" description="Home page" />
      <div className="md:pt8 flex w-full pt-8 md:pt-20">
        <div className={containerClassName}>
          <div className="space-between mx-auto flex ">
            {Object.keys(timers).map((timer) => (
              <PomoBtn
                key={timer}
                color={colorSelected.replace('bg-', '').replace('-400', '')}
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
              className="rounded-md border-4 p-4 text-4xl font-black text-white"
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
