import data from '../HomePageData.json';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Iconbox from '../components/Iconbox/Iconbox';
import Contact from "../components/Contact/Contact";
import PortfolioSection from '../components/Protfolio/PortfolioSection';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const { heroData, aboutData, skillsData, portfolioData, contactData, socialData } = data;
  return (
    <>
      <Helmet>
      <meta name="description" content="Sakthivel's Portfolio - Showcasing projects, skills, and expertise in MERN stack development and web technologies." />
        <meta name="keywords" content="Sakthivel, Sakthivel Dhanushkodi, Portfolio, Web Developer, MERN Stack, React Developer, Full Stack Developer, web design, JavaScript, React, HTML, CSS" />
        <meta name="author" content="Sakthivel" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sakthivel's Portfolio | Sakthivel" />
        <meta property="og:description" content="Explore Sakthivel's portfolio to see projects, skills, and expertise in MERN stack development and web technologies." />
        <meta property="og:url" content="https://sakthivel-portfolio.vercel.app/" />
        <meta property="og:image" content="/images/screenshot.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sakthivel's Portfolio | Sakthivel" />
        <meta name="twitter:description" content="Explore Sakthivel's portfolio to see projects, skills, and expertise in MERN stack development and web technologies." />
        <meta name="twitter:image" content="/images/screenshot.png" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sakthivel",
              "url": "https://sakthivel-portfolio.vercel.app/",
              "sameAs": [
                "https://www.linkedin.com/in/sakthiveldhanushkodi",
                "https://github.com/nameissakthi"
              ],
              "description": "Full Stack Developer specializing in MERN stack development and web technologies."
            }
          `}
        </script>
      </Helmet>
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
