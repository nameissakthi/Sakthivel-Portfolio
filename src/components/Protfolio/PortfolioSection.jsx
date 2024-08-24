import PropTypes from 'prop-types';
import './Portfolio.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import { useState } from 'react';
import SinglePortfolio from './SinglePortfolio';
import Modal from '../Modal/Modal';

const PortfolioSection = ({ data }) => {
  // Modal
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);

  const getData = (imgLink, title, subTitle) => {
    let tempData = [imgLink, title, subTitle];
    setTempData(item => [1, ...tempData]);
    setModal(true);
  }

  const modalClose = () => {
    setModal(false);
  }

  const { portfolioItems } = data;

  return (
    <>
      <section id="portfolio">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <SectionHeading title={'Portfolio'} />
        <div className="container">
          <div className="rowelement">
            {portfolioItems.map((element, index) => (
              <SinglePortfolio data={element} key={index} getData={getData} />
            ))}
          </div>
        </div>
        <div className="st-height-b100 st-height-lg-b80"></div>
      </section>
      {modal === true ? <Modal img={tempData[1]} title={tempData[2]} subTitle={tempData[3]} modalClose={modalClose} /> : ""}
    </>
  );
};

PortfolioSection.propTypes = {
  data: PropTypes.object,
};

export default PortfolioSection;


