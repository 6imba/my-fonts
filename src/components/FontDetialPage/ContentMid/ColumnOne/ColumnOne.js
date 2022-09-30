import './ColumnOne.css';
import Menu from './Menu/Menu';
import FilterBox from './FilterBox/FilterBox';
import ProductDetial from './ProductDetial/ProductDetial';
import ProductPrice from './ProductPrice/ProductPrice';
import img1 from './img/font-1.jpg'
import img2 from './img/font-2.jpg'
import img3 from './img/font-3.jpg'
import img4 from './img/font-4.jpg'
import img5 from './img/font-5.jpg'
import img6 from './img/font-6.jpg'
import img7 from './img/font-7.jpg'
import img8 from './img/font-8.jpg'

const ColumnOne = () => {
  return (
    <div className="content-mid-col-1">
      <Menu/>
      <FilterBox/>
      <div className="font-desc-row">
        <div className="font-desc-row-heading">
          <span className='s-1'><a href="">Garuspik Complete Family</a>3 fonts</span>
          <span className='s-2'>
            <i class="fa-solid fa-star"></i>
            Best Value!
          </span>
        </div>
        <div className="font-desc-row-body">
          <div className='products'>
            <ProductDetial productImage={img1} productName="Antartida Rounded Bold Italic"/>
            <ProductDetial productImage={img2} productName="Antartida Rounded Medium Italic"/>
            <ProductDetial productImage={img3} productName="Antartida Rounded Light"/>
            <ProductDetial productImage={img4} productName="Antartida Rounded Medium"/>
            <ProductDetial productImage={img5} productName="Antartida Rounded Light Italic"/>
            <ProductDetial productImage={img6} productName="Antartida Rounded Bold"/>
            <ProductDetial productImage={img7} productName="Antartida Rounded Black"/>
            <ProductDetial productImage={img8} productName="Antartida Rounded Black Italic"/>
          </div>
          <ProductPrice/>
        </div>
      </div>
    </div>
  )
}

export default ColumnOne;