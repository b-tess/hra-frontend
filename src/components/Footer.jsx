import { PiInstagramLogoLight } from 'react-icons/pi'
import { PiFacebookLogoLight } from 'react-icons/pi'
import { PiCopyrightLight } from 'react-icons/pi'

function Footer() {
    return (
        <footer className='w-full grid md:grid-flow-row auto-rows-auto md:auto-rows-min grid-cols-1 md:grid-cols-3 bg-black text-white py-5'>
            <div className='flex flex-col justify-center gap-y-3'>
                <div className='flex justify-center items-center'>
                    <img
                        src='../../hra-logo-footer.png'
                        alt='HRA Logo for the footer'
                        className='h-10'
                    />
                </div>
                <div className='flex justify-center items-center gap-x-3'>
                    <PiInstagramLogoLight className='text-3xl' />
                    <PiFacebookLogoLight className='text-3xl' />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-y-1'>
                <a
                    href='#home'
                    className='w-min rounded-md border-b border-solid border-b-white py-1 px-2'
                >
                    Home
                </a>
                <a
                    href='#about-us'
                    className='w-min rounded-md border-b border-solid border-b-white py-1 px-2'
                >
                    About
                </a>
                <a
                    href='#services'
                    className='w-min rounded-md border-b border-solid border-b-white py-1 px-2'
                >
                    Services
                </a>
                <a
                    href='#locations'
                    className='w-min rounded-md border-b border-solid border-b-white py-1 px-2'
                >
                    Locations
                </a>
                <a
                    href='#contact-us'
                    className='w-min rounded-md border-b border-solid border-b-white py-1 px-2'
                >
                    Contact
                </a>
            </div>
            <div className='flex flex-col justify-center items-center gap-y-2'>
                <a
                    href='#appointment-form'
                    className='w-min md:w-max rounded-md border-b border-solid border-b-white py-1 px-2 text-center'
                >
                    Book Appointment
                </a>
                <a
                    href={import.meta.env.VITE_GOOGLE_FORM_URL}
                    target='_blank'
                    className='w-min md:w-max rounded-md border-b border-solid border-b-white py-1 px-2 text-center'
                >
                    Join Group
                </a>
            </div>
            <div className='md:col-span-3 flex justify-center items-center h-min pt-2'>
                <div className='flex justify-center items-center gap-x-1'>
                    <PiCopyrightLight className='text-xl' />
                    <span>2024</span>
                    <span>Barbara Tess</span>
                    <span>All Rights Reserved</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
