import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import AssistanceSection from './components/AssistanceSection'
import ServicesSection from './components/ServicesSection'
import ContactUsSection from './components/ContactUsSection'
import Locations from './components/Locations'
import AppointmentForm from './components/AppointmentForm'

function App() {
    return (
        <>
            <NavBar />
            <HeroSection />
            <AboutSection />
            <AssistanceSection />
            <ServicesSection />
            <ContactUsSection />
            <Locations />
            <AppointmentForm />
            <p className='text-red-800'>This is a test.</p>
        </>
    )
}

export default App
