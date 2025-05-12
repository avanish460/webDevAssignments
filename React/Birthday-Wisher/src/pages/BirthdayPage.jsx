import React,{useState} from 'react';
import BirthdayCard from '../components/BirthdayCard';
import cake from '../assets/cake.png';
import celebration from '../assets/celebration.png';
import confetti from '../assets/confetti.png';

function BirthdayPage(){
    const [name, setName] = useState('');
    const [isComponentVisible, setIsComponentVisible] = useState(false);

    const handleComponent = () => {
        setIsComponentVisible(true);
    }

    return (
        <div>
            {!isComponentVisible ? (
                <div className='flex justify-center p-30'>
                <div className='shadow-xl text-center p-10 bg-sky-950 rounded-lg'>
                    <h1 className='p-5 text-2xl font-bold font-sans text-white'>Enter your Name</h1>
                    <div>
                        <input type="text" placeholder='Enter your name' 
                        className='py-1 rounded-lg w-120 px-1 bg-white'
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        />
                    </div>
                    <div className='p-5'>
                        <button className='bg-blue-500 px-2 py-1 text-white rounded-lg cursor-pointer'
                        onClick={handleComponent}
                        >
                        Done
                        </button>
                    </div>
                    
                </div>
            </div>
            ):(
                <div className='flex justify-between'>
                    <BirthdayCard name={name} imgUrl={cake} className1={'bg-yellow-500'}/>
                    <BirthdayCard name={name} imgUrl={celebration} className1={'bg-blue-500'}/>
                    <BirthdayCard name={name} imgUrl={confetti} className1={'bg-orange-500'}/>
                </div>
            )}
            
        </div>
    )
}

export default BirthdayPage;