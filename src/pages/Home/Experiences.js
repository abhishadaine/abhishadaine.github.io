import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { experiences } from '../../resources/experiences';

function Experiences() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    return (
        <div>
            <SectionTitle title="Work Experience" />
            <div className='flex py-10 gap-20 sm:flex-col'>
                <div className='flex flex-col gap-10 border-l-2 border-tertiary w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {experiences.map((experience, index) =>
                        <div onClick={() => {
                            setSelectedItemIndex(index);
                        }} className='cursor-pointer'>
                            <h1 className={`text-xl px-10 ${selectedItemIndex === index ?
                                'text-tertiary border-tertiary border-l-2 -ml-[3px] bg-[#0fa9f656] py-3' : 'text-white'}`}>
                                {experience.company}
                            </h1>
                        </div>)}
                </div>
                <div className='flex flex-col w-2/3' style={{gap : "15px"}}>
                    <h1 className='text-secondary text-2xl font-semibold'>{experiences[selectedItemIndex].title}</h1>
                    <h1 className='text-tertiary font-semibold '>{experiences[selectedItemIndex].period}</h1>
                    <p className='text-white'>{experiences[selectedItemIndex].description}</p>
                    <p className='text-white'>{experiences[selectedItemIndex].technologies.map((technology, index) => (
                        <span key={index} className="inline-block bg-[#1a3535c0] px-3 py-1 rounded-full text-sm font-semibold text-tertiary mr-2 mb-2">
                            {technology}
                        </span>
                    ))}</p>

                </div>

            </div>
        </div>
    );
}

export default Experiences
