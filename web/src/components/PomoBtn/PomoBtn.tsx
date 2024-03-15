interface BtnProps {
  btnText: string
  color: string
  isSelected: boolean
  onClickFunc: () => void
}

const PomoBtn = ({ btnText, color, isSelected, onClickFunc }: BtnProps) => {
  const colorVariants = {
    slate: 'bg-slate-500 hover:bg-slate-600',
    red: 'bg-red-500 hover:bg-red-600',
    emerald: 'bg-emerald-500 hover:bg-emerald-600',
  }

  const btnClass = `m-2 md:m-8 rounded-md p-2 md:p-4 text-white ${
    colorVariants[color]
  } ${isSelected ? `selected` : ''}`

  return (
    <button className={btnClass} onClick={onClickFunc}>
      {btnText}
    </button>
  )
}

export default PomoBtn
