import { RiMapPin2Line } from 'react-icons/ri'
import { RiPhoneFill } from 'react-icons/ri'
import { RiMailAddLine } from 'react-icons/ri'
import { RiTimeFill } from 'react-icons/ri'

function ContactUsSection() {
    return (
        <section id='contact-us'>
            <h2 className='my-5 text-3xl text-center'>Contact Us</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 gap-y-3'>
                <div className='flex flex-col gap-3 px-3'>
                    <h3 className='text-xl text-center font-extrabold'>
                        Kilimani
                    </h3>
                    <div className='flex items-center gap-3'>
                        <RiMapPin2Line className='text-bright-red text-2xl' />
                        <p className='font-bold'>
                            623 Wood Avenue Plaza, Fifth Floor, Argwings Kodhek
                            Road.
                        </p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <RiPhoneFill className='text-bright-red text-2xl' />
                        <p className='font-bold'>+254 736 514092</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <RiMailAddLine className='text-bright-red text-2xl' />
                        <p className='font-bold'>frontoffice@hra.co.ke</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <RiTimeFill className='text-bright-red text-2xl' />
                        <p className='font-bold'>
                            Monday - Friday: 8.30am - 5.30pm <br /> Saturday:
                            8.30am - 2.30pm
                        </p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 px-3'>
                    <h3 className='text-xl text-center font-extrabold'>
                        Parklands
                    </h3>
                    <div className='flex items-center gap-3'>
                        <RiMapPin2Line className='text-bright-red text-2xl' />
                        <p className='font-bold'>
                            Ground Floor, Krishna Plaza, Parklands.
                        </p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <RiPhoneFill className='text-bright-red text-2xl' />
                        <p className='font-bold'>+254 786 514092</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <RiMailAddLine className='text-bright-red text-2xl' />
                        <p className='font-bold'>info@hra.co.ke</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <RiTimeFill className='text-bright-red text-2xl' />
                        <p className='font-bold'>
                            Monday - Friday: 8.30am - 5.30pm <br /> Saturday:
                            8.30am - 2.30pm
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUsSection
