function Locations() {
    return (
        <section id='locations'>
            <h2 className='my-5 text-3xl text-center'>Our Locations</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 gap-y-3 lg:gap-x-3 px-3 mb-3'>
                <section>
                    <p className='text-sm text-center font-semibold mb-2'>
                        Kilimani
                    </p>
                    <iframe
                        className='w-full h-4/5 border-0'
                        loading='lazy'
                        allowFullScreen
                        src='https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ9dH5R6EQLxgRTbDX00DI1ms&key=AIzaSyDE9zu0_UI5j6BL3zYe_Pd0jn59-ktv2Kw'
                    ></iframe>
                </section>
                <section>
                    <p className='text-sm text-center font-semibold mb-2'>
                        Parklands
                    </p>
                    <iframe
                        className='w-full h-4/5 border-0'
                        loading='lazy'
                        allowFullScreen
                        src='https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ2U7UORoXLxgRBlJOgaIXNsE&key=AIzaSyDE9zu0_UI5j6BL3zYe_Pd0jn59-ktv2Kw'
                    ></iframe>
                </section>
            </div>
        </section>
    )
}

export default Locations
