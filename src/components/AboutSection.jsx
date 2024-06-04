import { RiSearchEyeLine } from 'react-icons/ri'
import { GiOnTarget } from 'react-icons/gi'
import { FaHandHoldingHeart } from 'react-icons/fa'
import { LiaPeopleCarrySolid } from 'react-icons/lia'

function AboutSection() {
    return (
        <section>
            <h1 className='mt-5 text-center text-4xl'>Who We Are</h1>
            <section className='grid grid-cols-3 grid-rows-2 gap-y-1'>
                <div className='col-span-3 flex flex-col items-center justify-center'>
                    <h2 className='text-xl text-center'>
                        <RiSearchEyeLine className='inline text-4xl' /> Our
                        Vision
                    </h2>
                    <p className='w-3/5 text-center'>
                        Proident culpa excepteur aliquip quis cillum sint
                        laboris. Eu nostrud ut consequat ut exercitation
                        occaecat quis ullamco culpa nisi. Nulla enim laboris
                        deserunt deserunt eiusmod consectetur sunt velit
                        cupidatat aliquip fugiat.
                    </p>
                </div>
                <div className='flex flex-col items-center justify-start'>
                    <h2 className='text-xl text-center'>
                        <GiOnTarget className='inline text-4xl' /> Our Mission
                    </h2>
                    <p className='p-3 text-center'>
                        Incididunt est amet occaecat nisi veniam laboris magna
                        pariatur excepteur nostrud excepteur. Est velit esse
                        occaecat nostrud nisi velit nisi excepteur tempor ex
                        laborum sint velit aute. Fugiat consequat exercitation
                        culpa qui exercitation fugiat consectetur dolor.
                    </p>
                </div>
                <div className='flex flex-col items-center justify-start'>
                    <h2 className='text-xl text-center'>
                        <FaHandHoldingHeart className='inline text-4xl' /> Our
                        Values
                    </h2>
                    <p className='p-3 text-center'>
                        Laborum anim aliqua duis Lorem cillum qui officia do
                        laboris exercitation ex consequat. Culpa consectetur est
                        cillum voluptate dolore dolor. Laboris cillum anim
                        proident eu aliquip reprehenderit reprehenderit pariatur
                        aute irure sunt ea. Culpa tempor mollit elit laborum
                        cupidatat incididunt. Voluptate in adipisicing voluptate
                        qui eu velit eiusmod ullamco. Sunt ea nostrud veniam
                        aute occaecat exercitation aliquip. Velit esse fugiat
                        sint anim excepteur ad amet.
                    </p>
                </div>
                <div className='flex flex-col items-center justify-start'>
                    <h2 className='text-xl text-center'>
                        <LiaPeopleCarrySolid className='inline text-4xl' /> Our
                        Culture
                    </h2>
                    <p className='p-3 text-center'>
                        Occaecat incididunt aute enim irure est do ut esse sunt
                        et. Enim cupidatat pariatur magna enim. Excepteur
                        officia laborum nulla anim et. Cupidatat irure dolore
                        anim nostrud exercitation reprehenderit ad anim proident
                        officia occaecat non. Est ipsum fugiat sit consequat
                        officia eiusmod sit est mollit esse culpa ad. Irure
                        exercitation adipisicing cupidatat commodo fugiat mollit
                        est ullamco mollit.
                    </p>
                </div>
            </section>
        </section>
    )
}

export default AboutSection
