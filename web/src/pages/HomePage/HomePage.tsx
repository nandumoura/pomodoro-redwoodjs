import React, { useState, useEffect } from 'react'

import { Metadata } from '@redwoodjs/web'

import PomoBtn from 'src/components/PomoBtn/PomoBtn'

const HomePage = () => {
  const pomodoroTimer = 25 * 60
  const shortBreakTimer = 5 * 60
  const longBreakTimer = 10 * 60
  const [totalSeconds, setTotalSeconds] = useState(pomodoroTimer)
  const [isRunning, setIsRunning] = useState(false) // Estado para controlar se o timer está em execução
  const [timerSelected, setTimerSelected] = useState('pomodoro')
  // Função para iniciar ou parar o timer

  useEffect(() => {
    let timer
    if (isRunning) {
      timer = setInterval(() => {
        if (totalSeconds > 0) {
          setTotalSeconds((prevTotalSeconds) => prevTotalSeconds - 1)
        } else {
          clearInterval(timer) // Limpa o intervalo quando o tempo chega a zero
          setIsRunning(false) // Define isRunning como falso quando o timer termina
        }
      }, 1000)
    }

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(timer)
  }, [totalSeconds, isRunning]) // Adiciona totalSeconds e isRunning como dependências para que o efeito seja reexecutado quando eles forem alterados

  // Função para formatar os segundos em minutos e segundos
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`
  }
  const toggleTimer = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning) // Inverte o estado de isRunning ao clicar no botão
  }
  const setShortBreak = () => {
    setTimerSelected('short-break')
    setTotalSeconds(shortBreakTimer)
  }
  const setLongBreak = () => {
    setTimerSelected('long-break')
    setTotalSeconds(longBreakTimer)
  }
  const setPomodoro = () => {
    setTimerSelected('pomodoro')
    setTotalSeconds(pomodoroTimer)
  }
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <div className="flex w-full pt-20">
        {/* Todo trocar cor quando clicar nos breaks */}
        <div className="mx-auto  rounded-lg bg-red-400 p-8">
          <div className="space-between mx-auto flex ">
            <PomoBtn
              isSelected={timerSelected === 'pomodoro'}
              onClickFunc={setPomodoro}
              btnText="pomodoro"
            />
            <PomoBtn
              isSelected={timerSelected === 'short-break'}
              onClickFunc={setShortBreak}
              btnText="Short breake"
            />
            <PomoBtn
              isSelected={timerSelected === 'long-break'}
              onClickFunc={setLongBreak}
              btnText="Long breake"
            />
          </div>
          <div className="text-center text-9xl font-bold text-slate-50">
            {formatTime(totalSeconds)}
          </div>
          <div className="flex justify-center p-8">
            <button
              onClick={toggleTimer}
              className=" rounded-md bg-red-600 p-4 text-4xl font-black text-white hover:bg-red-900"
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
