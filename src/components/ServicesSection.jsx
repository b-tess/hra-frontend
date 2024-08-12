function ServicesSection() {
    return (
        <div id='services'>
            <h2 className='my-5 text-3xl text-center'>What We Do</h2>
            <section>
                <div className='flex flex-col lg:flex-row gap-2 mb-2'>
                    <div className='flex-1 flex flex-col justify-center items-center gap-y-2'>
                        <h3 className='font-bold text-center text-2xl'>
                            Laboratory Services
                        </h3>
                        <p className='text-center text-base px-3'>
                            Eiusmod do ea ullamco sint sunt ex sunt occaecat
                            voluptate. Exercitation et ullamco ipsum aute ut id
                            non do ipsum ea. Reprehenderit eu excepteur sit
                            aliquip in consectetur non tempor elit anim duis.
                            Proident proident et ullamco aute proident.
                        </p>
                    </div>
                    <div className='flex-1 flex justify-center items-center'>
                        <img
                            loading='lazy'
                            src='../../laboratory.jpg'
                            alt='Laboratory technician wearing green gloves'
                            className='h-64 lg:h-100'
                        />
                    </div>
                </div>
                <div className='flex flex-col-reverse lg:flex-row gap-2 mb-2'>
                    <div className='flex-1 flex justify-center items-center'>
                        <img
                            loading='lazy'
                            src='../../nurse-patient.jpg'
                            alt="A nurse checking a patient\'s blood pressure"
                            className='h-64 lg:h-100'
                        />
                    </div>
                    <div className='flex-1 flex flex-col justify-center items-center gap-y-2'>
                        <h3 className='font-bold text-center text-2xl'>
                            Nursing Services
                        </h3>
                        <p className='text-center text-base px-3'>
                            Eiusmod do ea ullamco sint sunt ex sunt occaecat
                            voluptate. Exercitation et ullamco ipsum aute ut id
                            non do ipsum ea. Reprehenderit eu excepteur sit
                            aliquip in consectetur non tempor elit anim duis.
                            Proident proident et ullamco aute proident.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-2 mb-2'>
                    <div className='flex-1 flex flex-col justify-center items-center gap-y-2'>
                        <h3 className='font-bold text-center text-2xl'>
                            Fully Stocked Pharmacy
                        </h3>
                        <p className='text-center text-base px-3'>
                            Eiusmod do ea ullamco sint sunt ex sunt occaecat
                            voluptate. Exercitation et ullamco ipsum aute ut id
                            non do ipsum ea. Reprehenderit eu excepteur sit
                            aliquip in consectetur non tempor elit anim duis.
                            Proident proident et ullamco aute proident.
                        </p>
                    </div>
                    <div className='flex-1 flex justify-center items-center'>
                        <img
                            loading='lazy'
                            src='../../medication.jpg'
                            alt="A nurse checking a patient\'s blood pressure"
                            className='h-64 lg:h-100'
                        />
                    </div>
                </div>
                <div className='flex flex-col-reverse lg:flex-row gap-2 mb-2'>
                    <div className='flex-1 flex justify-center items-center'>
                        <img
                            loading='lazy'
                            src='../../doctor.jpg'
                            alt="A nurse checking a patient\'s blood pressure"
                            className='h-64 lg:h-100'
                        />
                    </div>
                    <div className='flex-1 flex flex-col justify-center items-center gap-y-2'>
                        <h3 className='font-bold text-center text-2xl'>
                            Consultation Services
                        </h3>
                        <p className='text-center text-base px-3'>
                            Eiusmod do ea ullamco sint sunt ex sunt occaecat
                            voluptate. Exercitation et ullamco ipsum aute ut id
                            non do ipsum ea. Reprehenderit eu excepteur sit
                            aliquip in consectetur non tempor elit anim duis.
                            Proident proident et ullamco aute proident.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-2 mb-2'>
                    <div className='flex-1 flex flex-col justify-center items-center gap-y-2'>
                        <h3 className='font-bold text-center text-2xl'>
                            Speciality Consultations
                        </h3>
                        <p className='text-center text-base px-3'>
                            Eiusmod do ea ullamco sint sunt ex sunt occaecat
                            voluptate. Exercitation et ullamco ipsum aute ut id
                            non do ipsum ea. Reprehenderit eu excepteur sit
                            aliquip in consectetur non tempor elit anim duis.
                            Proident proident et ullamco aute proident.
                        </p>
                    </div>
                    <div className='flex-1 flex justify-center items-center'>
                        <img
                            loading='lazy'
                            src='../../hra-specialities.jpeg'
                            alt='A representation of specialist consultations in Borromean rings.'
                            className='h-64 lg:h-100'
                        />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-y-1'>
                    <h3 className='font-medium text-center text-xl text-bright-red'>
                        Other services include...
                    </h3>
                    <p className='text-center text-base'>Travel vaccines.</p>
                    <p className='text-center text-base'>
                        Nutritionist consultations.
                    </p>
                    <p className='text-center text-base'>
                        Rheumatology consultations.
                    </p>
                    <p className='text-center text-base'>
                        Magnetic Resonance Imaging.
                    </p>
                    <p className='text-center text-base'>Counseling.</p>
                </div>
            </section>
        </div>
    )
}

export default ServicesSection
