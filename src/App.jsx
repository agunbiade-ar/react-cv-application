import { useState, createContext } from 'react'
import './App.css'
import HeaderComponent from './Components/HeaderComponent'
import BasicInfoComponent from './Components/BasicInfoComponent'
import EducationComponent from './Components/EducationComponent'

export const stateContext = createContext()

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [info, setInfo] = useState({
    'Full Name': '',
    Email: '',
    Phone: '',
    Address: '',
    'School Name': '',
    Course: '',
    'School Details': [],
  })

  const ToggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode)
  }

  const onChangeInfo = (e, fieldName) => {
    setInfo((previnfo) => {
      return {
        ...previnfo,
        [fieldName]: e.target.value,
      }
    })
  }

  const HandleAddInfo = () => {
    setInfo((prevInfo) => {
      return {
        ...prevInfo,
        ['School Name']: '',
        Course: '',
        'School Details': [
          ...prevInfo['School Details'],
          { name: info['School Name'], course: info['Course'] },
        ],
      }
    })
  }
  console.log(info['School Details'])
  return (
    <>
      <div
        className='container_'
        style={darkMode ? { backgroundColor: 'black', color: 'white' } : {}}
      >
        <div className='container_innerContainer'>
          <stateContext.Provider
            value={{
              ToggleDarkMode,
              onChangeInfo,
              info,
              HandleAddInfo,
            }}
          >
            <HeaderComponent label={'CV-Generator'} />
            <BasicInfoComponent />
            <EducationComponent />
          </stateContext.Provider>
        </div>

        <div className='container_innerContainer'>
          <div className='infoDisplay'>
            <h1>{info['Full Name'] || 'Jurgen Klopp'}</h1>

            <div>
              <h4>
                {'Email: '} {info['Email'] || 'arthas23@yahoo.com'}
              </h4>
              <h4>
                {'Phone no.: '} {info['Phone'] || '08035871574'}
              </h4>
            </div>

            <div className='address-section'>
              {'Address: '}
              {info['Address'] ||
                'Lorem ipsum dolor sit amet consectetur adipisicing elit'}
            </div>

            {/* <div className='school-section'>
              <ul>
                {info['School Name'].map((school, index) => {
                  return <li key={index}>{school.name}</li>
                })}
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
