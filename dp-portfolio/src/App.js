import { useEffect, useState } from 'react';
import './App.css';
import Main from './sections/Main';
import Loading from './sections/Loading';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("selectedTheme") === "dark"
  );

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    window.addEventListener("load", handleLoad);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div style={{ backgroundColor: isDarkMode ? "rgb(18, 18, 18)" : "rgb(255, 255, 255)" }}>
          <Loading isDarkMode={isDarkMode} />
        </div>
      ) : (
        <Main />
      )}
    </div>
  );
}

export default App;
