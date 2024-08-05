import { useState } from 'react'
import DatePicker from 'react-datepicker'
import {
    getDay,
    setHours,
    setMinutes,
} from 'react-datepicker/dist/date_utils.d.ts'
import 'react-datepicker/dist/react-datepicker.css'

function AppointmentForm() {
    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 30), 8)
    )
    const [formData, setFormData] = useState({
        name: '',
        nationalId: '',
        phone: '',
        email: '',
    })

    //Destructure the form data
    const { name, nationalId, phone, email } = formData

    function isWeekday(date) {
        const day = getDay(date)
        return day !== 0 && day !== 6
    }

    // function saturdayTime(date) {
    //     const day = getDay(date)

    //     if (day === 6) {
    //         return setHours(setMinutes(new Date(), 0), 14)
    //     }

    //     return setHours(setMinutes(new Date(), 0), 17)
    // }

    function filterPassedTime(time) {
        const currentDate = new Date()
        const selectedDate = new Date(time)

        return currentDate.getTime() < selectedDate.getTime()
    }

    function handleChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()

        const data = {
            ...formData,
            dateSelected: startDate,
        }

        console.log(data)
    }
    return (
        <section className='flex flex-col justify-center items-center'>
            <h2 className='my-5 text-3xl text-center'>Book An Appointment</h2>
            <form
                className='w-4/5 flex flex-col gap-y-2 border rounded-lg border-black p-3'
                onSubmit={handleSubmit}
            >
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
                <div className='flex flex-col md:flex-row gap-2 items-start md:items-center'>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        filterDate={isWeekday}
                        showTimeSelect
                        minTime={setHours(setMinutes(new Date(), 30), 8)}
                        maxTime={setHours(setMinutes(new Date(), 0), 17)}
                        dateFormat={'MMMM d, yyyy h:mm aa'}
                        filterTime={filterPassedTime}
                        // renderDayContents={saturdayInfo}
                        id='date-picker'
                        className='py-2 bg-inherit text-black shadow-diff rounded-md focus:outline-none focus:ring-1 focus:ring-black'
                    />
                    <span className='text-bright-red'>
                        *First come, first served on Saturdays.
                    </span>
                </div>
                <div className='flex justify-center items-center'>
                    <button
                        type='submit'
                        className='rounded-md w-min bg-black text-white hover:bg-translucent-red hover:text-black px-2 py-1 text-sm font-normal md:w-max md:px-3 md:py-2 md:font-medium'
                    >
                        Book Appointment
                    </button>
                </div>
            </form>
        </section>
    )
}

export default AppointmentForm
