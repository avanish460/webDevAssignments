import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaGithub } from 'react-icons/fa'

const InfoCard = ({username}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const apiUrl = `https://api.github.com/users/${username}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);
                setData(response.data);
            } catch (error) {
                alert(`Error fetching data: ${error}`);
            } finally{
                setLoading(false);
            }
        };
        fetchData();
    }, [apiUrl]);

    if(loading){
        return <p>Loading Data...</p>
    }
    return (
        <div>
            <div className="p-5 rounded-lg shadow-xl bg-gradient-to-b from-purple-500 to-pink-500">
                <div className="flex justify-center">
                    <img src={data.avatar_url} alt="profile image" className="w-15 h-15 rounded-full shadow-xl"/>
                </div>
                <div className="flex justify-center p-5">
                    <div>
                        <a href={data.html_url} className="shadow-xl">
                            <FaGithub size={32}/>
                        </a>
                    </div>
                    <div className="p-1">
                        <h1 className="text-md font-sans font-bold text-center">{data.name}</h1>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-[80%] text-center">
                        <span className="text-xs">{data.bio}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard;