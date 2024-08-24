import data from '../HomePageData.json';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Iconbox from '../components/Iconbox/Iconbox';
import Contact from "../components/Contact/Contact";
import PortfolioSection from '../components/Protfolio/PortfolioSection';
import { ToastContainer } from 'react-toastify';

const Home = () => {
  const { heroData, aboutData, skillsData, portfolioData, contactData, socialData } = data;
  return (
    <>
      <ToastContainer theme='dark'/>
      <Hero data={heroData} socialData={socialData} data-aos="fade-right" />
      <About data={aboutData} data-aos="fade-right" />
      <Iconbox data={skillsData} data-aos="fade-right" />
      <PortfolioSection data={portfolioData} data-aos="fade-right" />
      <Contact data={contactData} socialData={socialData} data-aos="fade-right" />
    </>
  )
}


export default Home;
