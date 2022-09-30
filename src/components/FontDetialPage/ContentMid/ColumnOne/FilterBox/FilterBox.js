import './FilterBox.css'

const FilterBox = () => {
  return (
    <div className="filter-box">
        <div className="search-text">
        <input type="text" placeholder='Enter your own text'/>
        </div>
        <div className='filter-controls'>
          <div class="slider-wrapper">
              <div class="slider"></div>
              <div class="slider-ring"></div>
          </div>
          <div className='color-box'>
            <a href="">
              <div className='box'>
                <span className='white-box'></span>
                <span className='black-box'></span>
              </div>
              <i class="fa-solid fa-caret-down"></i>
            </a>
          </div>
          <div className='ff'>
            ff
            <i class="fa-solid fa-caret-down"></i>
          </div>
          <div className='reset'>
            <i class="fa-solid fa-arrow-rotate-left"></i>
            Reset
          </div>
        </div>
    </div>
  )
}

export default FilterBox