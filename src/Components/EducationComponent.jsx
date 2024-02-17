import InputComponent from './InputComponent/InputComponent'
import { useContext } from 'react'
import { stateContext } from '../App'

function EducationComponent() {
  const { onChangeInfo, info, HandleAddInfo } = useContext(stateContext)
  return (
    <div>
      <h3>Education History</h3>
      <InputComponent
        label={'School Name'}
        type={'text'}
        value={info['School Name']}
        onChangeFunction={onChangeInfo}
      />

      <InputComponent
        label={'Course'}
        type={'text'}
        value={info['Course']}
        onChangeFunction={onChangeInfo}
      />

      <div>
        <button onClick={HandleAddInfo}>Add</button>
      </div>
    </div>
  )
}

export default EducationComponent
