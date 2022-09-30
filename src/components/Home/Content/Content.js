import './Content.css'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'
import img5 from './img/img5.jpg'
import img6 from './img/img6.jpg'
import ButtomContent from './ButtomContent/ButtomContent'
import Crousel from '../../Crousel/Crousel'


const Content = () => {
  return (
    <div className='content'>
        <div className="content-desc">
            <h1>MyFonts offers the largest selection of professional fonts for any project.</h1>
            <h2>Over 130,000 avialable fonts, and counting.</h2>
        </div>
        <Crousel/>
        <div className="content-offer">
            <div className="content-offer-heading">
                <a href="" children="a-left">
                    <h3 className='special-offers'>Special Offers</h3>
                </a>
                <span>These great deals are expiring soon, act now to save on these awesome fonts.</span>
                <a href='' className='a-right'>view all font deals</a>
            </div>
            <ul className="content-offer-link">
                <li>
                    <img src={img2} width="196px" height="98px" alt="" />
                    <p>1786 GLC Fournier | 10% Off</p>
                </li>
                <li>
                    <img src={img3} width="196px" height="98px" alt="" />
                    <p>Garuspik 22 | 30% Off</p>
                </li>
                <li>
                    <img src={img4} width="196px" height="98px" alt="" />
                    <p>Antartida Rounded | 50% Off</p>
                </li>
                <li>
                    <img src={img5} width="196px" height="98px" alt="" />
                    <p>Codeworld | 50% Off</p>
                </li>
                <li>
                    <img src={img6} width="196px" height="98px" alt="" />
                    <p>1786 GLC Fournier | 10% Off</p>
                </li>
                <li>
                    <img src={img2} width="196px" height="98px" alt="" />
                    <p>1786 GLC Fournier | 10% Off</p>
                </li>
            </ul>
        </div>
        <ButtomContent/>
    </div>
  )
}

export default Content