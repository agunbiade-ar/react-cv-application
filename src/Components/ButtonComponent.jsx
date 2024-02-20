function ButtonComponent({ label, handleClickFunction }) {
  return (
    <div>
      <button onClick={handleClickFunction}>{label}</button>
    </div>
  )
}

export default ButtonComponent
