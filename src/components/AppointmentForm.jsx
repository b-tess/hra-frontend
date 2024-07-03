function AppointmentForm() {
    return (
        <section className='flex flex-col justify-center items-center'>
            <h2 className='my-5 text-3xl text-center'>Book An Appointment</h2>
            <form className='w-4/5 flex flex-col gap-y-2 border rounded-lg border-black p-1'>
                <label htmlFor='name'>Name</label>
                <input
                    className='py-2 bg-inherit text-translucent-black shadow-diff focus:ring-1 focus:ring-red-500'
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Name'
                    value={''}
                />
                <label htmlFor='nationalid'>National ID</label>
                <input
                    className='py-2 bg-inherit text-translucent-black shadow-diff'
                    type='text'
                    id='nationalid'
                    name='nationalid'
                    placeholder='National ID'
                    value={''}
                />
                <label htmlFor='phone'>Phone Number</label>
                <input
                    className='py-2 bg-inherit text-translucent-black shadow-diff'
                    type='text'
                    id='phone'
                    name='phone'
                    placeholder='Phone Number'
                    value={''}
                />
                <label htmlFor='email'>Email</label>
                <input
                    className='py-2 bg-inherit text-translucent-black shadow-diff'
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Email'
                    value={''}
                />
            </form>
        </section>
    )
}

export default AppointmentForm
