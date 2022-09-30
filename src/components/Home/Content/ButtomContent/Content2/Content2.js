import './Content2.css'
import { Link } from "react-router-dom";

import plinc from '../img/plinc1.jpg'
import tera from '../img/tera.jpg'
import rustica from '../img/rustica.jpg'
import logirent from '../img/logirent.jpg'
import benthura from '../img/benthura.jpg'
import funkley from '../img/funkley.jpg'
import bigola from '../img/bigola.jpg'


const Content2 = () => {
  return (
    <div className='button-content2'>
        <h3 className='special-offers'>Staff Picks</h3>
        <div className='button-content2-picks'>
            <div className="button-content2-pick">
                <Link to="/product-detial">
                    <img src={plinc} height="35px"alt="" />
                </Link>
                <div className="desc">
                <span>
                    <a href="">Plinc Italiano </a>
                    by
                    <a href=""> House Industries</a>
                </span>
                <span>1 fonts starting at <b>$33.00</b></span>
                </div>
            </div>
            <div className="button-content2-pick">
                <Link to="/product-detial">
                    <img src={tera} height="35px"alt="" />
                </Link>
                <div className="desc">
                <span>
                    <a href="">Plinc Italiano </a>
                    by
                    <a href=""> House Industries</a>
                </span>
                <span>1 fonts starting at <b>$33.00</b></span>
                </div>
            </div>
            <div className="button-content2-pick">
                <Link to="/product-detial">
                    <img src={rustica} height="35px"alt="" />
                </Link>
                <div className="desc">
                <span>
                    <a href="">Plinc Italiano </a>
                    by
                    <a href=""> House Industries</a>
                </span>
                <span>1 fonts starting at <b>$33.00</b></span>
                </div>
            </div>
            <div className="button-content2-pick">
                <Link to="/product-detial">
                    <img src={logirent} height="35px"alt="" />
                </Link>
                <div className="desc">
                <span>
                    <a href="">Plinc Italiano </a>
                    by
                    <a href=""> House Industries</a>
                </span>
                <span>1 fonts starting at <b>$33.00</b></span>
                </div>
            </div>
            <div className="button-content2-pick">
                <Link to="/product-detial">
                    <img src={benthura} height="35px"alt="" />
                </Link>
                <div className="desc">
                <span>
                    <a href="">Plinc Italiano </a>
                    by
                    <a href=""> House Industries</a>
                </span>
                <span>1 fonts starting at <b>$33.00</b></span>
                </div>
            </div>
            <div className="button-content2-pick">
                <Link to="/product-detial">
                    <img src={funkley} height="35px"alt="" />
                </Link>
                <div className="desc">
                <span>
                    <a href="">Plinc Italiano </a>
                    by
                    <a href=""> House Industries</a>
                </span>
                <span>1 fonts starting at <b>$33.00</b></span>
                </div>
            </div>
            <div className="button-content2-pick pick-last">
                <Link to="/product-detial">
                    <img src={bigola} height="35px"alt="" />
                </Link>
                <div className="desc">
                <span>
                    <a href="">Plinc Italiano </a>
                    by
                    <a href=""> House Industries</a>
                </span>
                <span>1 fonts starting at <b>$33.00</b></span>
                </div>
            </div>
        </div>
    </div>


    )
}

export default Content2