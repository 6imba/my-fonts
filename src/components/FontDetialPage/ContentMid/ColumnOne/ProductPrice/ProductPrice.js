import './ProductPrice.css'

const ProductPrice = () => {
  return (
    <div className="product-pricing">
        <div className="product-price-scheme">
        <div>
            <span>Per Style:</span>
            <span className='product-rate'>
            $7.88
            <strike>$15.75</strike>
            </span>
            </div>
        </div>
        <div className="product-price-scheme">
        <div>
            <span>Per Style:</span>
            <span className='product-rate'>
            $7.88
            <strike>$15.75</strike>
            </span>
            </div>
        </div>
        <div className='button-wrapper'>
          <button>Buying Choices</button>
        </div>
    </div>
  )
}

export default ProductPrice