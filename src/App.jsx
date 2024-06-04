import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'

function App() {
    return (
        <>
            <NavBar />
            <HeroSection />
            <AboutSection />
            <p className='text-red-800'>This is a test.</p>
        </>
    )
}

export default App
