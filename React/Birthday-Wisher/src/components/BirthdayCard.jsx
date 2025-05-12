import React from 'react';

function BirthdayCard({name, imgUrl, className1}){
    return (
        <div className='flex justify-center'>
            <div className={`flex flex-col w-[70%] h-90 ${className1} shadow-xl rounded-lg mt-20`}>
                <div>
                    <h1 className='text-2xl text-center font-bold font-sans p-5'>Happy Birthday <span className='italic text-xl font-serif'>{name}</span></h1>
                </div>
                <div className='flex justify-center p-10'>
                    <img src={imgUrl} alt="Birthday Celebration" className='size-30'/>
                </div>
                <span className='text-center italic font-serif text-white'>Enjoy your day the fullest!</span>
            </div>
        </div>
    )
}

export default BirthdayCard;