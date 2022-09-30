import './ProductDetial.css'

const ProductDetial = (props) => {
  return (
    <div className="product-detail-wrapper">
      <div className="product-detail-container">
        <span className="product-image-wrapper">
          <img src={props.productImage} alt="Antartida Rounded Bold Italic" />
        </span>
        <span className="product-name-wrapper">
          <a href="">{props.productName}</a>
        </span>
      </div>
    </div>
  )
}

export default ProductDetial