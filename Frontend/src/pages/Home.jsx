import Navbar from "../components/Navbar"
import About from "../components/About";
import ParticlesBackground from "../components/Particle";
import { useNavigate } from "react-router-dom";
function Home(){
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/login")
  }

  const handleSignup = () => {
    navigate("/signup")
  }

  const handleFind = () => {
    navigate("/find")
  }
    return (
      <main>
        <Navbar />
        <div className="particle-container">
        <ParticlesBackground />
        </div>
        <div className="hero">
          <h1>Lost and Found</h1>
            <button onClick={handleFind}>Find item</button>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignup}>SignUp</button>
        </div>
        <About />
      </main>
    );
} 
export default Home; 