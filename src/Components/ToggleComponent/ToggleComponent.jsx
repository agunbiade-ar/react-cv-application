import './ToggleComponent.css';
import { useContext } from 'react';
import { stateContext } from '../../App';

function ToggleComponent() {
  const { ToggleDarkMode } = useContext(stateContext);

  return (
    <div>
      <label className='switch'>
        <input type='checkbox' onChange={ToggleDarkMode} />
        <span className='slider round'></span>
      </label>
    </div>
  );
}

export default ToggleComponent;
