import InputComponent from './InputComponent/InputComponent'
import TextAreaComponent from './TextAreaComponent/TextAreaComponent'

import { useContext } from 'react'
import { stateContext } from '../App'

function BasicInfoComponent() {
  const { onChangeInfo, info } = useContext(stateContext)

  return (
    <div>
      <br />
      <h3>Basic Info</h3>
      <InputComponent
        type={'text'}
        label={'Full Name'}
        value={info['Full Name']}
        onChangeFunction={onChangeInfo}
      />

      <InputComponent
        type={'email'}
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
