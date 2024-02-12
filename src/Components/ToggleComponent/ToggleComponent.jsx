import './ToggleComponent.css';

function ToggleComponent() {
  return (
    <div>
      <label className='switch'>
        <input type='checkbox' />
        <span className='slider round'></span>
      </label>
    </div>
  );
}

export default ToggleComponent;
