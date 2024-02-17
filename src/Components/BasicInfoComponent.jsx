import InputComponent from './InputComponent/InputComponent'
import TextAreaComponent from './TextAreaComponent/TextAreaComponent'

import { useContext } from 'react'
import { stateContext } from '../App'

function BasicInfoComponent() {
  const { onChangeInfo, info } = useContext(stateContext)

  return (
    <div>
      <h3>Basic Info</h3>
      <br />
      <InputComponent
        type={'text'}
        label={'Full Name'}
        value={info['First Name']}
        onChangeFunction={onChangeInfo}
      />

      <InputComponent
        type={'text'}
        label={'Email'}
        value={info['Email']}
        onChangeFunction={onChangeInfo}
      />

      <InputComponent
        type={'number'}
        label={'Phone'}
        value={info['Phone']}
        onChangeFunction={onChangeInfo}
      />

      <TextAreaComponent
        label={'Address'}
        value={info['Address']}
        onChangeFunction={onChangeInfo}
      />
    </div>
  )
}

export default BasicInfoComponent
