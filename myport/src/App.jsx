import { useEffect, useState } from 'react';
import './App.css'
import Homepage from './components/Homepage';
import CustomLoading from './components/CustomLoading';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <div>
      {loading ? (
        <CustomLoading/>
      ) : (
        <Homepage/>
      )}
    </div>
    </>
  )
}

export default App
