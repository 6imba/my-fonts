import img1 from './img/font_rend.jpg';
import './ContentTop.css';

const ContentTop = () => {
  return (
    <div className='font-head'>
        <div className='font-head-menu'>
        <a href="">Home</a> &#62; <a href="">Fonts</a> &#62; <a href="">W Type Foundry</a> &#62; <a href="" className='font-name'>Fujiwara</a>
        </div>
        <div className="intro">
          <div className="intro-1">
              <img src={img1} alt=""  className='font-head-img'/>
              <div>
              Fujiwara by <a href="" className='my-link'>W Type Foundry</a>
              </div>
          </div>
          <div className="intro-2">
              <h2>Individual Styles from $29.00</h2>
              <p>Complete family of 22 fonts: $150.00</p>
          </div>
        </div>
    </div>
  )
}

export default ContentTop