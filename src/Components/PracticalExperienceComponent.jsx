import InputComponent from './InputComponent/InputComponent'
import ButtonComponent from './ButtonComponent'
import TextAreaComponent from './TextAreaComponent/TextAreaComponent'

import { useContext } from 'react'
import { stateContext } from '../App'

function PracticalExperienceComponent() {
  const { onChangeInfo, info, HandleAddEmploymentInfo } =
    useContext(stateContext)

  return (
    <div>
      <br />
      <h3>Practical Experience</h3>
      <InputComponent
        type={'text'}
        label={'Company Name'}
        value={info['Company Name']}
        onChangeFunction={onChangeInfo}
      />

      <InputComponent
        type={'text'}
        label={'Position'}
        value={info['Position']}
        onChangeFunction={onChangeInfo}
      />

      <TextAreaComponent
        label={'Responsibilities'}
        value={info['Responsibilities']}
        onChangeFunction={onChangeInfo}
      />

      <InputComponent
        label={'Employment Start Date'}
        type={'date'}
        value={info['Employment Start Date']}
        onChangeFunction={onChangeInfo}
      />

      <InputComponent
        label={'Employment End Date'}
        type={'date'}
        value={info['Employment End Date']}
        onChangeFunction={onChangeInfo}
      />

      <ButtonComponent
        label={'Add'}
        handleClickFunction={HandleAddEmploymentInfo}
      />
    </div>
  )
}

export default PracticalExperienceComponent
