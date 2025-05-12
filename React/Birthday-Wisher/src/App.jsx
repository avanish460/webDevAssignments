import './App.css'
import BirthdayPage from './pages/BirthdayPage'
import naturePic from './assets/bgImage.png'

function App() {

  return (
    <div style={{
      backgroundImage: `url(${naturePic})`,
      backgroundSize: 'cover', // Optional: Adjust how the image is sized
      backgroundRepeat: 'no-repeat', // Optional: Prevent image from repeating
      height: '100vh', // Optional: Set a height for the container
      width: '100vw' // Optional: Set a width for the container
    }}>
      <div>
        <BirthdayPage />
      </div>
    </div>
  )
}

export default App
