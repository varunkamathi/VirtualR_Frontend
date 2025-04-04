import React, {useState, useEffect} from 'react'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import Feature from './components/Feature'
import WorkFlow from './components/WorkFlow'
import PricingSection from './components/PricingSection'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import SignIn from './components/Sigin'
import SignUp from './components/SignUp'


const App = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);


  useEffect(() => {
    if (showSignIn || showSignUp) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showSignIn, showSignUp]);

  const handleCloseModal = (e, type) => {
    if (e.target.id === "overlay") {
      type === "signin" ? setShowSignIn(false) : setShowSignUp(false);
    }
  };
  return (
    <>
    <Nav onSignInClick={() => setShowSignIn(true)}
         onSignUpClick={() => setShowSignUp(true)} 
         className={`min-h-screen ${showSignIn ? "blur-sm" : ""}`}/>
          {/* Sign In Modal */}
      {showSignIn && (
        <div
          id="overlay"
          className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur"
          onClick={(e) => handleCloseModal(e, "signin")}
        >
          <SignIn onClose={() => setShowSignIn(false)} />
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignUp && (
        <div
          id="overlay"
          className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur"
          onClick={(e) => handleCloseModal(e, "signup")}
        >
          <SignUp onClose={() => setShowSignUp(false)} />
        </div>
      )}
    
      

    <div className='max-w-7xl mx-auto pt-20 px-6'>
    <HeroSection  onSignInClick={() => setShowSignIn(true)} />
    
    <Feature/>
    <WorkFlow />
    <PricingSection/>
    <Testimonial/>
    <Footer/>
    </div>
    </>
  )
}

export default App