import './ButtomContent.css'
import img2 from './img/img2.jpg'
import plinc from './img/plinc1.jpg'
import tera from './img/tera.jpg'
import rustica from './img/rustica.jpg'
import logirent from './img/logirent.jpg'
import benthura from './img/benthura.jpg'
import funkley from './img/funkley.jpg'
import bigola from './img/bigola.jpg'

import Content1 from './Content1/Content1'
import Content2 from './Content2/Content2'

const ButtomContent = () => {
  return (
    <section className='button-content-wrapper'>
      <div className='button-content-container'>

        <Content1/>
        <Content2/>
        
      </div>
    </section>
  )
}

export default ButtomContent