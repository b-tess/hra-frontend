import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import AssistanceSection from './components/AssistanceSection'
import ServicesSection from './components/ServicesSection'

function App() {
    return (
        <>
            <NavBar />
            <HeroSection />
            <AboutSection />
            <AssistanceSection />
            <ServicesSection />
            <p className='text-red-800'>This is a test.</p>
        </>
    )
}

export default App
