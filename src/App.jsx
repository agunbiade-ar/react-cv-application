import { useState, createContext } from 'react';
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import BasicInfoComponent from './Components/BasicInfoComponent';

export const stateContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [basicInfo, setBasicInfo] = useState({
    'First Name': '',
    'Last Name': '',
    Email: '',
  });
  const ToggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const HandleChangeOnBasicInfo = (e, fieldName) => {
    setBasicInfo((prevBasicInfo) => {
      return {
        ...prevBasicInfo,
        [fieldName]: e.target.value,
      };
    });
  };

  return (
    <>
      <div
        className='container_'
        style={darkMode ? { backgroundColor: 'black', color: 'white' } : {}}
      >
        <div className='container_innerContainer'>
          <stateContext.Provider
            value={{ ToggleDarkMode, HandleChangeOnBasicInfo, basicInfo }}
          >
            <HeaderComponent label={'CV-Generator'} />
            <BasicInfoComponent />
          </stateContext.Provider>
        </div>

        <div className='container_innerContainer'>the other side</div>
      </div>
    </>
  );
}

export default App;
