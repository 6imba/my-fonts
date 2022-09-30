import './Menu.css'

const Menu = () => {
  return (
    <ul className="menu">
        <li>
          {/* <a href="">1</a> */}
          <a href="">
              <span>Aa</span>
              <span className='s-2'>GLYPHS</span>
          </a>
        </li>
        <li>
          {/* <a href="">2</a> */}
          <a href="">Individual Styles</a>
        </li>
        <li className='menu-ribbon'>
          {/* <a href="">3</a> */}
          <span>Best Value</span>
          <a href="">Family Packages</a>
        </li>
        <li>
          {/* <a href="">4</a> */}
          <a href="">Tech Specs</a>
        </li>
        <li>
          {/* <a href="">5</a> */}
          <a href="">Licensing</a>
        </li>
    </ul>
  )
}

export default Menu