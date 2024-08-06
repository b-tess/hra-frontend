import { useState } from 'react'
import DatePicker from 'react-datepicker'
import {
    getDay,
    setHours,
    setMinutes,
} from 'react-datepicker/dist/date_utils.d.ts'
import 'react-datepicker/dist/react-datepicker.css'
import emailjs from '@emailjs/browser'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function AppointmentForm() {
    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 30), 8)
    )
    // const [formData, setFormData] = useState({
    //     firstName: '',
    //     lastName: '',
    //     nationalId: '',
    //     location: '',
    //     phone: '',
    //     email: '',
    // })

    //Destructure the form data
    // const { firstName, lastName, nationalId, location, phone, email } = formData

    // console.log(startDate.toString())
    const formSchema = Yup.object().shape({
        firstName: Yup.string().required('Required.'),
        lastName: Yup.string().required('Required.'),
        nationalId: Yup.string()
            .matches(/^[0-9]+$/, 'Must only be numbers.')
            .required('Required.'),
        phone: Yup.string()
            .matches(/^[0-9]+$/, 'Must only be numbers.')
            .required('Required.'),
        email: Yup.string()
            .email('Must be a valid email.')
            .required('Required.'),
    })

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            nationalId: '',
            location: '',
            phone: '',
            email: '',
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            // console.log(values)
            const data = {
                ...values,
                startDate: startDate.toString(),
            }

            // console.log(data)
            emailjs
                .send('service_n2x11u4', 'appointment_form', data, {
                    publicKey: 'S-_0riTS3Vhw-OG-_',
                })
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

    // function handleChange(e) {
    //     setFormData((prevState) => ({
    //         ...prevState,
    //         [e.target.id]: e.target.value,
    //     }))
    // }

    // function handleSubmit(e) {
    //     e.preventDefault()

    //     const data = {
    //         ...formData,
    //         startDate: startDate.toString(),
    //     }

    //     emailjs
    //         .send('service_n2x11u4', 'appointment_form', data, {
    //             publicKey: 'S-_0riTS3Vhw-OG-_',
    //         })
    //         .then(
    //             (response) => {
    //                 console.log(
    //                     'Email sent successfully.',
    //                     response.status,
    //                     response.text
    //                 )
    //             },
    //             (error) => {
    //                 console.log('Email not sent.', error)
    //             }
    //         )
    // }
    return (
        <section className='flex flex-col justify-center items-center'>
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
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='nationalId'>National ID</label>
                    <input
                        className='py-2 bg-inherit text-black shadow-diff rounded-md focus:outline-none focus:ring-1 focus:ring-black'
                        type='text'
                        id='nationalId'
                        name='nationalId'
                        placeholder='National ID'
                        value={formik.values.nationalId}
                        onChange={formik.handleChange}
                    />
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
