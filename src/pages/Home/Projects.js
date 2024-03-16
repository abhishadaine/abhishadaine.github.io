import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { projects } from '../../resources/projects';


function Projects() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    return (
        <div>
            <SectionTitle title="Projects" />
            <div className='flex py-10 gap-20 sm:flex-col'>
                <div className='flex flex-col gap-10 border-l-2 border-tertiary w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {projects.map((projects, index) =>
                        <div onClick={() => {
                            setSelectedItemIndex(index);
                        }} className='cursor-pointer'>
                            <h1 className={`text-xl px-10 ${selectedItemIndex === index ?
                                'text-tertiary border-tertiary border-l-2 -ml-[3px] bg-[#0fa9f656] py-3' : 'text-white'}`}>
                                {projects.title}
                            </h1>
                        </div>)}
                </div>
                <div className='flex flex-col w-2/3' style={{ gap: "15px" }}>
                    <h1 className='text-secondary text-2xl font-semibold'>{projects[selectedItemIndex].title}</h1>
                    <p className='text-tertiary font-semibold'>{projects[selectedItemIndex].line}</p>
                    <h1 className='text-white '>{projects[selectedItemIndex].description}</h1>
                    <p className='text-white'>{projects[selectedItemIndex].technologies.map((technology, index) => (
                        <span key={index} className="inline-block bg-[#1a3535c0] px-3 py-1 rounded-full text-sm font-semibold text-tertiary mr-2 mb-2">
                            {technology}
                        </span>
                    ))}</p>

                </div>

            </div>
        </div>
    )
}

export default Projects
