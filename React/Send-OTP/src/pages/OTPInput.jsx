import { useEffect, useRef, useState } from 'react'; // Importing necessary hooks from React

function OTPInput() { // Defining the OTPInput functional component
  const [otp, setOtp] = useState(['', '', '', '']); // Creating a state variable 'otp' as an array of empty strings for each OTP digit
  const inputRef = useRef([]); // Creating a ref to store references to each input element

  useEffect(() => { // useEffect hook to perform side effects
    inputRef.current[0].focus(); // Focusing on the first input element when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  const handleChange = (index, e) => { // Function to handle changes in the input fields
    const value = e.target.value; // Getting the current value of the input field
    setOtp((prevOtp) => { // Updating the 'otp' state immutably
      const newOtp = [...prevOtp]; // Creating a copy of the previous 'otp' array
      newOtp[index] = value; // Updating the digit at the current index
      return newOtp; // Returning the new 'otp' array
    });

    if (value !== '' && index < otp.length - 1) { // Checking if the entered value is not empty and not the last input
      inputRef.current[index + 1].focus(); // Focusing on the next input element
    }
  }

  function handleBackspace(index, e) { // Function to handle backspace key press
    if (e.keyCode === 8 && otp[index] === '' && index > 0) { // Checking if the pressed key is backspace, the current input is empty, and it's not the first input
      inputRef.current[index - 1].focus(); // Focusing on the previous input element
    }
  }
  return ( // Returning the JSX for the component
    <div> {/* Main container div */}
      <div className='border-2 border-white p-10 rounded-lg mt-20'> {/* Outer container for styling */}
        <div className='p-10'> {/* Inner padding div */}
          <h1 className='text-2xl text-center text-white'>Login via OTP</h1> {/* Heading for the OTP input */}
        </div>
        {/* Mapping through the 'otp' array to render individual input fields */}
        {
          otp.map((digit, index) => (
            <input
              type="text" // Setting the input type to text
              className='w-10 h-10 text-white border-2 border-white rounded-lg mr-5' // Styling for the input field
              key={index} // Unique key for each input element in the map
              value={digit} // Binding the input value to the corresponding 'otp' state
              maxLength={1} // Limiting the input to a single character
              onChange={(e) => handleChange(index, e)} // Handling the input change event
              ref={(ref) => inputRef.current[index] = ref} // Assigning the ref to the current input element
              onKeyDown={(e) => handleBackspace(index, e)} // Handling the key down event for backspace functionality
            />
          ))
        }
        <div className='p-10 flex justify-center'> {/* Container for the login button */}
          <button className='text-white p-2 rounded-lg border-2 border-white cursor-pointer'>Login</button> {/* Login button */}
        </div>
      </div>

    </div>
  )
}
export default OTPInput; // Exporting the OTPInput component 