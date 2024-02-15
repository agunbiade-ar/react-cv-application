function InputComponent({ label, type, value, HandleChangeOnBasicInfo }) {
  console.log(value);
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
          onChange={(e) => HandleChangeOnBasicInfo(e, label)}
        />
      </div>
    </div>
  );
}

export default InputComponent;
