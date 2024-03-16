import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function Contact() {
    return (
        <div>
            <SectionTitle title="Get in touch" />
            <div className='flex sm:flex-col'>

                <div className=' flex flex-col h-400px w-1/4'>
                    <dotlottie-player src="https://lottie.host/46e94f5c-6102-45b3-82f2-2fa69e6e9241/4gf3C849BR.json"
                        background="transparent"
                        speed="1"
                        loop
                        autoplay>
                    </dotlottie-player>
                </div>
                <div className='flex flex-col mt-7 gap-2 w-3/4'>
                    <p className='text-secondary'>
                        I am actively seeking full-time positions where I can apply my skills and contribute meaningfully to innovative projects and teams. I am open to exciting opportunities that align with my expertise and passion for software development.
                    </p>
                    <p className='text-secondary'>
                        Feel free to contact me if you have a position that matches my skills and experience.
                    </p>
                    <div className='py-10'>
                        <div className='flex flex-col gap-5  text-tertiary'>
                            <a href="mailto:abhidaine@gmail.com" target="_blank">
                                <span className='h'>
                                    <i class="ri-mail-line mr-2"> </i>
                                    abhidaine@gmail.com
                                </span>
                            </a>
                            <a href="tel:+16176028129" target="_blank" >
                                <span className='h'>
                                    <i class="ri-phone-line mr-2"></i>
                                    +16176028129
                                </span>
                            </a>
                            <a href="https://www.google.com/maps/place/Boston,+MA/@42.3138779,-71.2999263,10z/data=!3m1!4b1!4m6!3m5!1s0x89e3652d0d3d311b:0x787cbf240162e8a0!8m2!3d42.3600825!4d-71.0588801!16zL20vMDFjeF8?entry=ttu/ " target="_blank" >
                                <span className='h'>
                                    <i class="ri-map-pin-line mr-2"></i>
                                    Boston, MA
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
