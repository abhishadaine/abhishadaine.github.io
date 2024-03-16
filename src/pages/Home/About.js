import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function About() {
    const skills = [
        "Java",
        "Swift",
        "React",
        "AWS",
        "JavaScript",
        "Spring Boot",
        "SQL",

    ]
    return (
        <div>
            <SectionTitle title="About" />
            <div className='flex w-full items-center sm:flex-col'>
                <div className='h-[60vh] w-1/2 sm:w-full'>
                    <dotlottie-player
                        src="https://lottie.host/e440b897-6189-4031-87dd-0516718016a1/Lg3FsTRIlf.json"
                        background="transparent"
                        speed="1"
                        loop
                        autoplay></dotlottie-player>
                </div>
                <div className='flex flex-col gap-5 w-1/2 sm:w-full'>
                    <p className='text-white'>
                    I am a seasoned Full-Stack developer based in Boston, currently pursuing a graduate degree in 
                    Computer Science at Northeastern University. My passion lies in continuously improving my coding skills 
                    and crafting cutting-edge websites and applications.

                    </p>
                    <p className='text-white '>
                        My expertise encompasses hands-on experience in Backend development using SpringBoot,
                        proficient mobile app development for both Android and iOS platforms,
                        and creation of WebApps and Websites using the MERN Stack.
                        Additionally, I excel in deploying applications on various cloud infrastructures,
                        ensuring seamless integration and performance.

                    </p>

                    <p className='text-white '>
                        In addition to my diverse experience across various technologies,
                        I have had the opportunity to work with a range of companies across different industries.
                        I've contributed to software development projects for a prominent  
                        <a href='https://www.amazon.com/' target="_blank" className='text-tertiary'> e-commerce enterprise</a>
                        , a leading
                        <a href='https://home.barclays/' target="_blank" className='text-tertiary'>  bank</a>,
                        and in a multinational 
                        <a href='https://www.abbott.com/' target="_blank" className='text-tertiary' > healthcare organization</a>
                        , gaining valuable insights and expertise in each sector.
                    </p>
                </div>
            </div>
            <div className='py-5'>
                <h1 className='text-white text-xl'>
                    A few technologies I have worked on -
                </h1>
                <div className='flex flex-wrap gap-8 mt-5'>
                    {skills.map((skill, index) => (
                        <div className='border border-tertiary rounded py-3 px-10'>
                            <h1 className='text-tertiary'>{skill}</h1>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default About
