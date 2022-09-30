import './Content1.css'
import img1 from '../img/compact.jpg'
import img2 from '../img/sanehya.jpg'
import img3 from '../img/ancient.jpg'

const Content1 = () => {
  return (
    <div className='button-content1'>
        <div className='button-content1-wrapper'>
        <h4>New Releases</h4>
        <div className='list list1'>
            <a href="">
            <img src={img1} width="304px" height="152px" alt="" />
            </a>
            <div className='list-head'>
              <div>
                <a href="">Codeworld</a> by Par <a href=''>Defaut</a>
              </div>
            11 fonts starting at $25.00
            </div>
        </div>
        <div className='list list2'>
            <a href="">
            <img src={img2} width="304px" height="152px" alt="" />
            </a>
            <div className='list-head'>
              <div>
                <a href="">Codeworld</a> by Par <a href=''>Defaut</a>
              </div>
            11 fonts starting at $25.00
            </div>
        </div>
        <div className='list list3'>
            <a href="">
            <img src={img3} width="304px" height="152px" alt="" />
            </a>
            <div className='list-head'>
              <div>
                <a href="">Codeworld</a> by Par <a href=''>Defaut</a>
              </div>
            11 fonts starting at $25.00
            </div>
        </div>
        </div>
    </div>

  )
}

export default Content1