function GroupInvite() {
    return (
        <section className='w-full mt-4 flex justify-center items-center'>
            <div className='flex flex-col w-3/5 justify-center items-center gap-2 rounded-xl bg-translucent-red py-2'>
                <p className='font-semibold text-black text-center px-1'>
                    <span className='text-xl'>
                        Want to unlock the secrets of your body?
                    </span>{' '}
                    <br />
                    Discover how to shield yourself and loved ones from
                    unexpected health challenges?
                    <br /> Unravel the mysteries of allergens, conquer
                    autoimmune concerns, and gain insights into your overall
                    well-being?
                    <br /> Join our community of health-savvy individuals today
                    by filling out this quick form.
                </p>
                <a
                    href={import.meta.env.VITE_GOOGLE_FORM_URL}
                    target='_blank'
                    className='rounded-md py-1 px-3 md:py-2 md:px-1 bg-white hover:bg-translucent-gray-red text-black hover:text-white text-center w-min md:w-max shadow-diff'
                >
                    Fill Form
                </a>
            </div>
        </section>
    )
}

export default GroupInvite
