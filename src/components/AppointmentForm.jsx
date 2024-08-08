import { useState } from 'react'
import DatePicker from 'react-datepicker'
import {
    getDay,
    setHours,
    setMinutes,
} from 'react-datepicker/dist/date_utils.d.ts'
import 'react-datepicker/dist/react-datepicker.css'
import { GoCalendar } from 'react-icons/go'
import emailjs from '@emailjs/browser'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function AppointmentForm() {
    const [startDate, setStartDate] = useState(null)

    const formSchema = Yup.object().shape({
        firstName: Yup.string().required('Please fill in this field.'),
        lastName: Yup.string().required('Please fill in this field.'),
        nationalId: Yup.string()
            .matches(/^[0-9]+$/, 'Please enter a valid ID/Passport number.')
            .required('Please fill in this field.'),
        location: Yup.string().required('Please fill in this field.'),
        phone: Yup.string()
            .matches(/^[0-9]+$/, 'Please enter a valid phone number.')
            .required('Please fill in this field.'),
        email: Yup.string()
            .email('Please enter a valid email.')
            .required('Please fill in this field.'),
    })

    const formik = useFormik({
        initialValues: {
            startDate,
            firstName: '',
            lastName: '',
            nationalId: '',
            location: '',
            phone: '',
            email: '',
        },
        validationSchema: formSchema,
        onSubmit: (values, { resetForm }) => {
            // console.log(values)
            const data = {
                ...values,
                startDate: startDate.toString(),
            }

            // console.log(data)
            emailjs
                .send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID_KILIMANI,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID_KILIMANI,
                    data,
                    {
                        publicKey: import.meta.env.VITE_PUBLIC_KEY_KILIMANI,
                    }
                )
                .then(
                    (response) => {
                        console.log(
                            'Email sent successfully.',
                            response.status,
                            response.text
                        )
                    },
                    (error) => {
                        console.log('Email not sent.', error)
                    }
                )

            resetForm()
            setStartDate(null)
        },
    })

    function isWeekday(date) {
        const day = getDay(date)
        return day !== 0 && day !== 6
    }

    function filterPassedTime(time) {
        const currentDate = new Date()
        const selectedDate = new Date(time)

        return currentDate.getTime() < selectedDate.getTime()
    }

    return (
        <section
            id='appointment-form'
            className='flex flex-col justify-center items-center'
        >
            <h2 className='my-5 text-3xl text-center'>Book An Appointment</h2>
            <form
                className='w-4/5 grid grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-5 gap-2 border rounded-lg border-black p-3'
                onSubmit={formik.handleSubmit}
            >
                <div className='flex flex-col'>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                        className='py-2 bg-inherit text-black shadow-diff rounded-md focus:outline-none focus:ring-1 focus:ring-black'
                        type='text'
                        id='firstName'
                        name='firstName'
                        placeholder='First Name'
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.firstName && formik.touched.firstName ? (
                        <p className='text-bright-red'>
                            *{formik.errors.firstName}
                        </p>
                    ) : null}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input
                        className='py-2 bg-inherit text-black shadow-diff rounded-md focus:outline-none focus:ring-1 focus:ring-black'
                        type='text'
                        id='lastName'
                        name='lastName'
                        placeholder='Last Name'
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.lastName && formik.touched.lastName ? (
                        <p className='text-bright-red'>
                            *{formik.errors.lastName}
                        </p>
                    ) : null}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='nationalId'>National ID/Passport No</label>
                    <input
                        className='py-2 bg-inherit text-black shadow-diff rounded-md focus:outline-none focus:ring-1 focus:ring-black'
                        type='text'
                        id='nationalId'
                        name='nationalId'
                        placeholder='National ID'
                        value={formik.values.nationalId}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.nationalId && formik.touched.nationalId ? (
                        <p className='text-bright-red'>
                            *{formik.errors.nationalId}
                        </p>
                    ) : null}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='location'>Location</label>
                    <select
                        name='location'
                        id='location'
                        value={formik.values.location}
                        onChange={formik.handleChange}
                        className='py-2 bg-inherit text-black shadow-diff rounded-md focus:outline-none focus:ring-1 focus:ring-black'
                    >
                        <option value=''>--Select--</option>
                        <option value='Parklands'>Parklands</option>
                        <option value='Kilimani'>Kilimani</option>
                    </select>
                    {formik.errors.location && formik.touched.location ? (
                        <p className='text-bright-red'>
                            *{formik.errors.location}
                        </p>
                    ) : null}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='phone'>Phone Number</label>
                    <input
                        className='py-2 bg-inherit text-black shadow-diff rounded-md focus:outline-none focus:ring-1 focus:ring-black'
                        type='text'
                        id='phone'
                        name='phone'
                        placeholder='Phone Number'
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.phone && formik.touched.phone ? (
                        <p className='text-bright-red'>
                            *{formik.errors.phone}
                        </p>
                    ) : null}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='email'>Email</label>
                    <input
                        className='py-2 bg-inherit text-black shadow-diff rounded-md focus:outline-none focus:ring-1 focus:ring-black'
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email ? (
                        <p className='text-bright-red'>
                            *{formik.errors.email}
                        </p>
                    ) : null}
                </div>
                <div className='flex flex-col gap-2 items-start md:flex-row md:items-center md:col-span-2'>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        filterDate={isWeekday}
                        showTimeSelect
                        minTime={setHours(setMinutes(new Date(), 30), 8)}
                        maxTime={setHours(setMinutes(new Date(), 0), 17)}
                        dateFormat={'MMMM d, yyyy h:mm aa'}
                        filterTime={filterPassedTime}
                        placeholderText='Select appointment time'
                        required
                        autoComplete='off'
                        showIcon
                        icon={<GoCalendar />}
                        id='date-picker'
                        className='py-2 bg-inherit text-black shadow-diff rounded-md focus:outline-none focus:ring-1 focus:ring-black'
                    />
                    <span className='text-bright-red'>
                        *First come, first served on Saturdays.
                    </span>
                </div>
                <div className='flex justify-center items-center md:col-span-2'>
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
