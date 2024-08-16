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
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  // loading animation

  return (
    <div className="App">
      {isLoading ? (<div style={{ backgroundColor: isDarkMode ? ("rgb(18, 18, 18)") : ("rgb(255, 255, 255)") }}><Loading isDarkMode={isDarkMode} /></div>) : (<Main />)}
    </div>
  );
}

export default App;
