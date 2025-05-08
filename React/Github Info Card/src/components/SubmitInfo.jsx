
import React, { useState } from "react";
import InfoCard from "./InfoCard";



function SubmitInfo(){
    const [username, setUsername] = useState('');
    const [isComponentVisible, setIsComponentVisible] = useState(false);

    const handleSubmit = () => {
        setIsComponentVisible(true);
    }

    const handleGoBack = () => {
        setIsComponentVisible(false);
    }

    return (
        <div>
            {isComponentVisible && (
                <div className="p-2 w-[10%]">
                    <button 
                    className="text-md font-sans font-bold shadow-xl rounded-lg px-5 py-2 bg-sky-500"
                    onClick={handleGoBack}
                    >
                        Back
                    </button>
                </div>
            )}
            <h1 className="text-3xl font-sans font-bold p-5 text-center">GitHub Info Card</h1>
            <div className='flex justify-center'>
                {!isComponentVisible ? (
                    <div className='flex flex-col p-5 shadow-xl rounded-lg bg-lime-500'>
                        <input type="text" 
                        placeholder="Enter GitHub Username" 
                        className='border-2 border-white p-1 mt-10 rounded-lg text-center'
                        value={username}
                        name="username"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        />
                        <button 
                        className='ml-[30%] w-20 bg-blue-500 mt-10 px-1 py-2 rounded-lg text-md font-bold font-sans text-white shadow-xl cursor-pointer'
                        onClick={handleSubmit}
                        >
                            Submit  
                        </button>
                    </div>
                ) : (
                    <div className="">
                        <InfoCard username={username}/>
                    </div>
                    
                )}
            </div>
        </div>
    )
}

export default SubmitInfo;