import { useState } from 'react'
import DatePicker from './DatePicker'

function AppointmentForm() {
    const [formData, setFormData] = useState({
        name: '',
        nationalId: '',
        phone: '',
        email: '',
    })

    //Destructure the form data
    const { name, nationalId, phone, email } = formData

    function handleChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }
    return (
        <section className='flex flex-col justify-center items-center'>
            <h2 className='my-5 text-3xl text-center'>Book An Appointment</h2>
            <form className='w-4/5 flex flex-col gap-y-2 border rounded-lg border-black p-3'>
                <label htmlFor='name'>Name</label>
                <input
                    className='py-2 bg-inherit text-translucent-black shadow-diff rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:text-black'
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Name'
                    value={name}
                    onChange={handleChange}
                />
                <label htmlFor='nationalId'>National ID</label>
                <input
                    className='py-2 bg-inherit text-translucent-black shadow-diff rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:text-black'
                    type='text'
                    id='nationalId'
                    name='nationalId'
                    placeholder='National ID'
                    value={nationalId}
                    onChange={handleChange}
                />
                <label htmlFor='phone'>Phone Number</label>
                <input
                    className='py-2 bg-inherit text-translucent-black shadow-diff rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:text-black'
                    type='text'
                    id='phone'
                    name='phone'
                    placeholder='Phone Number'
                    value={phone}
                    onChange={handleChange}
                />
                <label htmlFor='email'>Email</label>
                <input
                    className='py-2 bg-inherit text-translucent-black shadow-diff rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:text-black'
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Email'
                    value={email}
                    onChange={handleChange}
                />
                <DatePicker />
            </form>
        </section>
    )
}

export default AppointmentForm
