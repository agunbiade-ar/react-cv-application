import InputComponent from './InputComponent/InputComponent'
import ButtonComponent from './ButtonComponent'

import { useContext } from 'react'
import { stateContext } from '../App'

function EducationComponent() {
  const { onChangeInfo, info, HandleAddEducationInfo } =
    useContext(stateContext)
  return (
    <div>
      <br />
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

      <InputComponent
        label={'Start Date'}
        type={'date'}
        value={info['Start Date']}
        onChangeFunction={onChangeInfo}
      />

      <InputComponent
        label={'End Date'}
        type={'date'}
        value={info['End Date']}
        onChangeFunction={onChangeInfo}
      />

      <ButtonComponent
        label={'Add'}
        handleClickFunction={HandleAddEducationInfo}
      />
    </div>
  )
}

export default EducationComponent
