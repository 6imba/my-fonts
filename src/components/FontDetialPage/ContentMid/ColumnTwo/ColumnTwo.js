import './ColumnTwo.css'

const ColumnTwo = () => {
  return (
    <div className="content-mid-col-2">
      <div className="content-mid-col-2-head">
          <div className='h-r'>
              <a href="" className='my-link'> Add to Album </a>
              <i class="fa-solid fa-caret-down"></i>
          </div>
          <div className='h-l'>
              <i class="fa-solid fa-heart"></i>
          </div>
      </div>
      <div className="content-mid-col-2-body">
          <h2>Licensing Options</h2>
          <ul>
              <li>
                  <a href="">Webfonts</a>
              </li>
              <li>
                  <a href="">App</a>
              </li>
              <li>
                  <a href="">ePub</a>
              </li>
              <li>
                  <a href="">Server</a>
              </li>
              <li>
                  <a href="">Desktop</a>
              </li>
              <li>
                  <a href="">Digital Ads</a>
              </li>
          </ul>
      </div>
      <div className="content-mid-col-2-body">
          <h2>OpenType Features</h2>
          <ul>
              <li>
                  <a href="">Ligatures</a>
              </li>
              <li>
                  <a href="">Alternatives</a>
              </li>
          </ul>
      </div>
  </div>
  )
}

export default ColumnTwo