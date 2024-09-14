import { useEffect, useState } from 'react';
import './App.css';
import Main from './sections/Main';
import Loading from './sections/Loading';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("selectedTheme") === "dark";
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleContentLoaded = () => setIsLoading(false);
    document.addEventListener("DOMContentLoaded", handleContentLoaded);

    return () => {
      document.removeEventListener("DOMContentLoaded", handleContentLoaded);
    };
  }, []);

  const containerClass = isDarkMode ? 'dark-background' : 'light-background';

  return (
    <div className={`App ${containerClass}`}>
      {isLoading ? <Loading isDarkMode={isDarkMode} /> : <Main />}
    </div>
  );
}

export default App;
