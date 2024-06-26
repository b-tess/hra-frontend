import { MdOutlineMedicalInformation } from 'react-icons/md'

function AssistanceSection() {
    return (
        <section className='w-full flex items-center justify-center'>
            <div className='flex flex-col gap-1 items-center justify-center w-3/5 rounded-3xl bg-bright-red py-3'>
                <MdOutlineMedicalInformation className='text-4xl text-black' />
                <h3 className='text-base text-center font-bold text-white'>
                    Do You...
                </h3>
                <p className='text-white text-center md:text-left px-1 md:px-0'>
                    Need clarification on medical queries?
                </p>
                <p className='text-white text-center md:text-left px-1 md:px-0'>
                    Have questions about a certain condition?
                </p>
                <p className='text-white text-center md:text-left px-1 md:px-0'>
                    Have lab tests that you need done?
                </p>
                <p className='text-white text-center md:text-left px-1 md:px-0'>
                    Have a nursing procedure that you need taken care of?
                </p>
                <p className='text-white font-medium text-center md:text-left px-1 md:px-0'>
                    We can help with all that and more...
                </p>
                <a
                    href='#contact-us'
                    className='bg-white rounded-md px-3 py-2 text-black text-center font-medium'
                >
                    Contact Us
                </a>
            </div>
        </section>
    )
}

export default AssistanceSection
