function HeroSection() {
    return (
        <section className='relative w-screen h-screen-30 bg-white bg-logo bg-contain bg-no-repeat sm:animate-glide sm:h-screen-50 lg:h-screen-70 '>
            <div className='absolute inset-0 bg-translucent-gray-red grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 items-center justify-center px-5'>
                <h1 className='text-white text-xl sm:text-2xl font-semibold tracking-wide text-shadow-custom-black text-center'>
                    HEALTH RISK ASSESSMENT
                </h1>
                <p className='bg-translucent-white text-white text-sm sm:text-lg text-center font-medium'>
                    Culpa sint incididunt est eu nisi occaecat esse voluptate
                    qui et id sint dolore reprehenderit. Aliqua pariatur aute
                    consequat duis culpa commodo aliqua non. Do qui laborum
                    consectetur ex aliqua reprehenderit in labore quis et elit
                    ad.
                </p>
            </div>
        </section>
    )
}

export default HeroSection
