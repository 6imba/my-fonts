import './ContentMid.css'
import ColumnTwo from './ColumnTwo/ColumnTwo'
import ColumnOne from './ColumnOne/ColumnOne'

const ContentMid = () => {
  return (
    <div className='content-mid-wrapper'>
        <p>
            Fujiwara Font Family was designed by 
            <a href="" className='my-link'>David Súid</a>
            , and published by 
            <a href="" className='my-link'>W Type Foundry</a>
            . Fujiwara contains 22 styles and family package options. 
            <a href="" className='my-link'>More about this family</a>
        </p>
        <div>
          <ColumnOne/>
          <ColumnTwo/>
        </div>
    </div>
  )
}

export default ContentMid