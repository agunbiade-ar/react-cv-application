import React from 'react'

function TextAreaComponent({ label, value, onChangeFunction }) {
  return (
    <div>
      <div>
        <label>{label}</label>
      </div>
      <textarea
        name={label}
        value={value}
        onChange={(e) => onChangeFunction(e, label)}
      />
    </div>
  )
}

export default TextAreaComponent
