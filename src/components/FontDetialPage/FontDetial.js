import './FontDetial.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Crousel from '../Crousel/Crousel';
import ContentTop from './ContentTop/ContentTop';
import ContentMid from './ContentMid/ContentMid';
import ContentButtom from './ContentButtom/ContentButtom';

function FontDetial() {
  return (
    <div className='font-detial-wrapper'>
        <Header/>
        <ContentTop/>
        <Crousel/>
        <ContentMid/>
        <ContentButtom/>
        <Footer/>
    </div>
  )
}

export default FontDetial