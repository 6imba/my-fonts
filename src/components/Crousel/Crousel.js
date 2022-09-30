import './Crousel.css'
import img1 from './img/c-img1.jpg'
import img2 from './img/c-img2.jpg'
import img3 from './img/c-img3.jpg'

const Crousel = () => {
  return (
    <div className="content-crousel">
        <div className="crousel-container">
            <div className="crousel-item">
                <a href="">
                    <img src={img1} alt="" />
                </a>
                <div className='crousel-item-desc'>
                    <div>
                        <a href="">Centro Serif</a>
                        " by "
                        <a href="">Joelmaker</a>
                    </div>
                    <div>
                        <span>88</span>
                        <span>Album</span>
                    </div>
                </div>
                <p>1 fonts starting at $49.00</p>
            </div>
            <div className="crousel-item">
                <a href="">
                    <img src={img3} alt="" />
                </a>
                <div className='crousel-item-desc'>
                    <div>
                        <a href="">Centro Serif</a>
                        " by "
                        <a href="">Joelmaker</a>
                    </div>
                    <div>
                        <span>88</span>
                        <span>Album</span>
                    </div>
                </div>
                <p>1 fonts starting at $49.00</p>
            </div>
            <div className="crousel-item">
                <a href="">
                    <img src={img1} alt="" />
                </a>
                <div className='crousel-item-desc'>
                    <div>
                        <a href="">Centro Serif</a>
                        " by "
                        <a href="">Joelmaker</a>
                    </div>
                    <div>
                        <span>88</span>
                        <span>Album</span>
                    </div>
                </div>
                <p>1 fonts starting at $49.00</p>
            </div>
        </div>
    </div>
  )
}

export default Crousel