function InputComponent({ label, type, value, onChangeFunction }) {
  return (
    <div>
      <div>
        <label htmlFor={label}>{label}</label>
      </div>
      <div>
        <input
          type={type}
          id={label}
          name={label}
          value={value}
          onChange={(e) => onChangeFunction(e, label)}
        />
      </div>
    </div>
  )
}

export default InputComponent
