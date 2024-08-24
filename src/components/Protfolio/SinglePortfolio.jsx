import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

const SinglePortfolio = ({ data, getData }) => {
  const { imgLink, imgLinkLg, url, title, subTitle, effect, duration, delay } = data;

  return (
    <div className="column" data-aos={effect} data-aos-duration={duration} data-aos-delay={delay}>
      <div className="st-portfolio-single st-style1" onClick={() => getData(imgLinkLg, title, subTitle)}>
        <div className="st-portfolio-item">
          <div className="st-portfolio st-zoom">
            <div className="st-portfolio-img st-zoom-in">
              <img src={imgLink} alt="portfolio" />
            </div>
            <div className="st-portfolio-item-hover">
              <Icon icon="mdi:plus-circle" />
            </div>
          </div>
            <h5>{title}</h5>
            <p>{subTitle}</p>
        </div>
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer">View <span>{`>`}</span></a>
    </div >
  )
}

SinglePortfolio.propTypes = {
  data: PropTypes.object
}

export default SinglePortfolio
