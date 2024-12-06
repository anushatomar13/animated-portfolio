import React from 'react';
import PropTypes from 'prop-types';
import WindowScreen from '../../components/WindowScreen';
import HoverImage from '../../components/HoverImage';
import ViewsTitle from '../../components/ViewsTitle';

const WindowImage = ({ src }) => (
  <HoverImage
    showFilter
    imageClassName='ai-image'
    src={src}
  />
);

const getSide = (index) => index % 2 ? 'left' : 'right';

const SingleProject = (props) => {
  const { image, link, title, index } = props;
  const side = getSide(index);
  return (
    <div className='ai-projects-single'>
      <div className='row'>
        <div className='col-6 d-none d-lg-block'>
          <div className=''>
            <WindowScreen containerClassName={`ai-projects-image-container ai-projects-image-container-${side}`}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <WindowImage src={image} />
              </a>
            </WindowScreen>
          </div>
        </div>
        <div className={`col-12 col-lg-6 d-flex align-items-center ${side === 'right' ? 'order-first' : ''}`}>
          <ProjectTextSide {...props} />
        </div>
      </div>
    </div>
  );
};

const ProjectTextSide = (props) => {
  const { link, label, title, description, techs, index } = props;
  const side = getSide(index);
  return (
    <div
      data-aos={`fade-down-${side}`}
      className={`ai-projects-text-side ai-projects-text-side-${side}`}>
      <div
        data-aos={`zoom-in-${side}`}
        className='ai-projects-text-featured'>{label}</div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className='ai-projects-text-title'>
        {title}
      </a>
      <div
        data-aos={`zoom-in-${side}`}
        className='ai-projects-text-description'>
        {description}
      </div>
      <div
        data-aos={`zoom-in-${side}`}
        className='ai-projects-text-tecs'>
        {techs.map((tech, i) => `${tech} ${techs.length - 1 !== i ? ' | ' : ''}`)}
      </div>
    </div>
  );
};

const Projects = ({ data: { heading, list } }) => {
  return (
    <div className='ai-projects'>
      <div className='container'>
        <div className='ai-projects-container'>
          <ViewsTitle text={heading} />
          <div className='row justify-content-center'>
            {(list || []).map((project, i) => (
              <SingleProject
                key={i}
                index={i}
                {...project}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Projects.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        techs: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Projects;
