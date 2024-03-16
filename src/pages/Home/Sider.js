import React from 'react'

function Sider() {
    return (
        <div className='fixed left-0 px-10 sm:hidden' style={{ top: '40%' }}>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col gap-5  text-gray-400 text-2xl'>
                    <a href="https://www.linkedin.com/in/abhishadaine/" target="_blank">
                        <i class="ri-linkedin-fill"></i>
                    </a>
                    <a href="mailto:abhidaine@gmail.com" target="_blank">
                        <i class="ri-mail-line"></i>
                    </a>
                    <a href="https://drive.google.com/file/d/1mvLPWJZ6oliqIkQlUUmt3YxlvBQb3HiH/view?usp=sharing" target="_blank">
                        <i class="ri-file-line "></i>
                    </a>
                    <a href="https://github.com/abhishadaine" target="_blank">
                        <i class="ri-github-fill "></i>
                    </a>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sider
