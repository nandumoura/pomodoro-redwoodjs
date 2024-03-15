interface DisplayTimerProps {
  totalSeconds: number
}

const DisplayTimer = ({ totalSeconds }: DisplayTimerProps) => {
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`
  }
  return (
    <div className="text-center text-9xl font-bold text-slate-50">
      {formatTime(totalSeconds)}
    </div>
  )
}

export default DisplayTimer
