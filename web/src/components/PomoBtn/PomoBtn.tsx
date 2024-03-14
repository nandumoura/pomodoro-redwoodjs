interface BtnProps {
  btnText: string
  isSelected: boolean
  onClickFunc: () => void
}

const PomoBtn = ({ btnText, isSelected, onClickFunc }: BtnProps) => {
  const btnClass = `m-8 rounded-md p-4 text-white hover:bg-red-500 ${
    isSelected ? 'bg-red-500' : ''
  }`

  return (
    <button className={btnClass} onClick={onClickFunc}>
      {btnText}
    </button>
  )
}

export default PomoBtn
