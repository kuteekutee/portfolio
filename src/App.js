import './App.css';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';

function App() {
  const name = "Bernard Sng";
  const profession = "Software Engineer";
  const fileID = "1JmrawLQecFLL9CSvVPz_Moj5SmAX75Qf";
  const imageUrl = `https://drive.google.com/uc?id=${fileID}` 
  return (
    <>
      <div className='imageContainer'>
        <img className='image' src={imageUrl} alt="picure of bernard" />
        <h1>{name}</h1>
        <h2>{profession}</h2>
        <AboutMe />
        <ContactMe />
    </div>
    </>
    
  );
}

export default App;
