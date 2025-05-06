import React, { useMemo, useState } from "react";

function Paragraph(){
    const [wordLength, setWordLength] = useState(0);
    const [paragraph, setParagraph] = useState('');
    const para = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, delectus cumque quae laudantium excepturi officiis eveniet, a possimus earum culpa rerum voluptas mollitia. Voluptate harum veniam quas provident ea id incidunt inventore dignissimos. Accusamus voluptas officiis, corporis eos tempora ullam enim explicabo esse dolores ad nihil animi aliquid obcaecati libero?';

    const wordList = useMemo(() => {
        return para.split(' ');
    }, para);

    const generator = () => {
        let temp = [];
        for(let i=0; i<wordLength; i++){
            temp.push(wordList[Math.floor(Math.random() * wordList.length)]);
        }
        setParagraph(temp.join(' '));
    };

    return (
        <div>
            <div>
                <div>
                    <div>
                        <h1 className="text-4xl font-sans tracking-wider text-center font-bold pt-10">Para Generator</h1>
                    </div>
                    <div className="flex justify-center p-10 gap-2">
                        <input 
                        type="number" 
                        placeholder="Enter Number of Word"
                        className="w-[60%] h-5 p-5 rounded-lg border border-gray-500"
                        onChange={(e) => {
                            setWordLength(e.target.value);
                        }}
                        />
                        <button 
                        className="border broder-gray-500 p-2 rounded-lg bg-slate-950 text-white cursor-pointer"
                        onClick={generator}
                        >
                            Generate
                        </button>
                    </div>
                    <div>
                        <div className="flex justify-center w-[60%] ml-[20%]">
                            <p className="text-sm font-serif p-2 text-center">
                                {paragraph}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Paragraph;