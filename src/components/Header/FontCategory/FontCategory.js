import './FontCategory.css'
import img1 from './img/sans-serif.jpg'
import img2 from './img/slab-serif.jpg'
import img3 from './img/serif.jpg'
import img4 from './img/display.jpg'
import img5 from './img/handwritten.jpg'
import img6 from './img/script.jpg'

const FontCategory = () => {
  return (
    <div className='font-category'>
        <div className="font-category-wrapper">
            <div className='font-category-desc'>
                <p className='title-text'>Browser Fonts</p>
                <p>by category</p>
            </div>
            <ul className='font-category-nav'>
                <li>
                    <a href="" width="163px">
                        <img src={img1} width="119px" alt="Sans Serif" />
                    </a>
                </li>
                <li>
                    <a href="" width="156px">
                        <img src={img2} width="128px" alt="Slab Serif" />
                    </a>
                </li>
                <li>
                    <a href="" width="156px">
                        <img src={img3} width="75px" alt="Serif" />
                    </a>
                </li>
                <li>
                    <a href="" width="156px">
                        <img src={img4} width="113px" alt="Display" />
                    </a>
                </li>
                <li>
                    <a href="" width="156px">
                        <img src={img5} width="130px" alt="Handwritten" />
                    </a>
                </li>
                <li>
                    <a href="" width="163px">
                        <img src={img6} width="80px" alt="Script" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default FontCategory