import InputComponent from './InputComponent/InputComponent';
import { useContext } from 'react';
import { stateContext } from '../App';

function BasicInfoComponent() {
  const { HandleChangeOnBasicInfo, basicInfo } = useContext(stateContext);

  return (
    <div>
      <h3>Basic Info</h3>
      <br />
      <InputComponent
        type={'text'}
        label={'First Name'}
        value={basicInfo['First Name']}
        HandleChangeOnBasicInfo={HandleChangeOnBasicInfo}
      />

      <InputComponent
        type={'text'}
        label={'Last Name'}
        value={basicInfo['Last Name']}
        HandleChangeOnBasicInfo={HandleChangeOnBasicInfo}
      />

      <InputComponent
        type={'text'}
        label={'Email'}
        value={basicInfo['Email']}
        HandleChangeOnBasicInfo={HandleChangeOnBasicInfo}
      />
    </div>
  );
}

export default BasicInfoComponent;
