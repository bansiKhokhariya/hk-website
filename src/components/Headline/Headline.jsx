import './Headline.css';

const Headline = (props) => {

  return (
    <div className='headline-section'>
      <div className="tickerwrapper">
        <div className="marquee">
          <div className="marquee__item">
            <span className='healine-green-text'>{props.headlineText1}</span>
            <span className='healine-black-text'>{props.headlineText2}</span>
            <span className='healine-green-text'>{props.headlineText1}</span>
            <span className='healine-black-text'>{props.headlineText2}</span>
            <span className='healine-green-text'>{props.headlineText1}</span>
            <span className='healine-black-text'>{props.headlineText2}</span>
            <span className='healine-green-text'>{props.headlineText1}</span>
            <span className='healine-black-text'>{props.headlineText2}</span>
            <span className='healine-green-text'>{props.headlineText1}</span>
          </div>
          <div className="marquee__item" style={{ marginLeft: '50px' }}>
            <span className='healine-black-text'>{props.headlineText2}</span>
            <span className='healine-green-text'>{props.headlineText1}</span>
            <span className='healine-black-text'>{props.headlineText2}</span>
            <span className='healine-green-text'>{props.headlineText1}</span>
            <span className='healine-black-text'>{props.headlineText2}</span>
            <span className='healine-green-text'>{props.headlineText1}</span>
            <span className='healine-black-text'>{props.headlineText2}</span>
            <span className='healine-green-text'>{props.headlineText1}</span>
            <span className='healine-black-text'>{props.headlineText2}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headline;