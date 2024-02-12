import '../App.css';
import ToggleComponent from './ToggleComponent/ToggleComponent';

function HeaderComponent({ label }) {
  return (
    <div className='headercomponent-container'>
      <h2>{label}</h2>
      <ToggleComponent />
    </div>
  );
}

export default HeaderComponent;
