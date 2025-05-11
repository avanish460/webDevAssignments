import React, {useState} from 'react';
import OTPInput from './OTPInput';

function PhoneNumberPage(){
    const [phoneNumber, setPhoneNumber] = useState('');
    const [handleComponent, setHandleComponent] = useState(false);

    const callComponent = () => {
        setHandleComponent(true);
    }

    return (
        <div>
            <div className='flex justify-center'>
                {!handleComponent ? (
                    <div className='rounded-lg border-2 border-white p-10 mt-20'>
                        <div className='flex justify-center'>
                            <h1 className='text-white p-10 text-2xl font-sans tracking-wide'>Login via OTP</h1>
                        </div>
                        <div className='flex justify-center'>
                            <input type="text" name="phonenumber" id="phonenumber"
                            placeholder='Enter mobile number' 
                            required
                            className='border-2 border-white rounded-lg p-2 text-white'
                            value={phoneNumber}
                            onChange={(e) => {
                                setPhoneNumber(e.target.value);
                            }}
                            />
                        </div>
                        <div className='p-10 flex justify-center'>
                            <button className='px-2 py-2 rounded-lg text-white border-2 border-white cursor-pointer'
                            onClick={callComponent}
                            >Send OTP</button>
                        </div>
                    </div>
                ):(
                    <div>
                        <OTPInput />
                    </div>
                )}
            </div>
        </div>
    )
}

export default PhoneNumberPage;