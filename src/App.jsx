import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { HelmetProvider } from "react-helmet-async"

function App() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  return (
    <HelmetProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
