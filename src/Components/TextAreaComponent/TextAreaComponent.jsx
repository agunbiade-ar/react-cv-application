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
        rows={5}
        cols={40}
      />
    </div>
  )
}

export default TextAreaComponent
