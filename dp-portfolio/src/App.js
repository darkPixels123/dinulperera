import { useEffect, useState } from 'react';
import './App.css';
import Main from './sections/Main';
import Loading from './sections/Loading';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("selectedTheme") === "dark"
  );

  const [isLoading, setIsLoading] = useState(true);

  // loading animation
  useEffect(() => {
    window.addEventListener("DOMContentLoaded", function () {
      setIsLoading(false)
    })
  }, []);
  // loading animation

  return (
    <div className="App">
      {isLoading ? (<div style={{ backgroundColor: isDarkMode ? ("rgb(18, 18, 18)") : ("rgb(255, 255, 255)") }}><Loading isDarkMode={isDarkMode} /></div>) : (<Main />)}
    </div>
  );
}

export default App;
