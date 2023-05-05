import React from 'react'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../store/Register/action';

const Registration = () => {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  function handleValidSubmit(event, values) {
    event.preventDefault();
    console.log("value", values)
    dispatch(registerUser(values))
  }
  console.log("store", store)
  return (
    <div className='register_contaienr'>
      <div className='register_box'>
        <div className='heading'>
          <span className='h2 gray center'>SignUp Page</span>
        </div>
        <AvForm onValidSubmit={(e, v) => {
          handleValidSubmit(e, v);
        }}>
          <div className='input_container'>
            <div>
              <AvField
                name='name'
                label={'Name'}
                validate={{
                  required: {
                    value: true,
                    errorMessage: 'Please enter a name',
                    pattern: { value: '^[A-Za-z0-9]+$' },
                    minLength: { value: 1 },
                    maxLength: { value: 10 }
                  },
                }}
                type='text'
                className='input_box'
              />
            </div>
            <div>
              <AvField
                name='password'
                label={'Password'}
                type='password'
                validate={{
                  required: {
                    value: true,
                    errorMessage: 'Please Set a Password'
                  },
                }}
                className='input_box'

              />
            </div>
            <div>
              <AvField
                name='confirm_password'
                label={'Confirm Password'}
                type='password'
                validate={{
                  required: {
                    value: true,
                    errorMessage: 'Please Re-Enter your Password'
                  },
                }}
                className='input_box'
              />
            </div>
            <div>
              <AvField
                name='country_code'
                label={'Country code'}
                type='text'
                validate={{
                  required: {
                    value: true,
                    errorMessage: 'Please Enter Your Country code'
                  },
                }}
                className='input_box'
              />
            </div>
            <div>
              <AvField
                name='mobile'
                label={'Mobile Number'}
                type='mobile'
                validate={{
                  required: {
                    value: true,
                    errorMessage: 'Enter Mobile Number'
                  },
                }}
                className='input_box'
              />
            </div>
            <div className='center'>
              <button type='submit' className='button-white'>Submit</button>
            </div>
          </div>
        </AvForm>
      </div>
    </div>
  )
}

export default Registration