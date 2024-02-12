import { useState } from 'react';
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import MainComponent from './Components/MainComponent';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const ToggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <>
      <div
        className='container_'
        style={darkMode ? { backgroundColor: 'black', color: 'white' } : {}}
      >
        <div className='container_innerContainer'>
          <HeaderComponent label={'CV-Generator'} />
        </div>

        <div className='container_innerContainer'>the other side</div>
      </div>
    </>
  );
}

export default App;
