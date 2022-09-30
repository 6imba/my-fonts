import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-container'>
            <div className="footer-content">
                <div className="item item-1">
                    <h3>Connect</h3>
                    <div className='input-field'>
                        <input type="text" name="" id="" placeholder='Subscribe to our newsletters'/>
                        <button>Subscribe</button>
                    </div>
                    <ul>
                        <li>
                            <a href="">
                            <i class="fa-brands fa-instagram footer-icon"></i> Follow us on Instagram
                            </a>
                        </li>
                        <li>
                            <a href="">
                            <i class="fa-brands fa-twitter footer-icon"></i> Follow us on Twitter
                            </a>
                        </li>
                        <li>
                            <a href="">
                            <i class="fa-brands fa-pinterest footer-icon"></i> Follow us on Pinterest
                            </a>
                        </li>
                        <li>
                            <a href="">
                            <i class="fa-brands fa-facebook footer-icon"></i> Like our Facebook page
                            </a>
                        </li>
                    </ul>

                </div>
                <div className="item item-2">
                    <h3>We accept</h3>
                    <ul>
                        <li>
                            <span>
                                <svg width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.8886 0H1.11142C0.497598 0 0 0.489245 0 1.09276V17.5044C0 18.108 0.497598 18.5972 1.11142 18.5972H28.8886C29.5024 18.5972 30 18.108 30 17.5044V1.09276C30 0.489245 29.5024 0 28.8886 0Z" fill="#1A1F71"/>
                                    <path d="M11.4034 5.38651L8.06506 13.2191H5.88767L4.23501 6.96683C4.22062 6.82084 4.1682 6.68095 4.0828 6.56069C3.9974 6.44042 3.88191 6.34384 3.74747 6.28026C3.10657 5.98195 2.43079 5.76228 1.73535 5.62619L1.78906 5.39869H5.29271C5.52395 5.39933 5.74722 5.48178 5.92171 5.63097C6.0962 5.78016 6.21025 5.98613 6.243 6.2112L7.10651 10.7166L9.25085 5.38651H11.4034ZM19.9353 10.6678C19.9353 8.59997 17.0432 8.49028 17.0432 7.56402C17.0432 7.28371 17.32 6.98308 17.9149 6.90996C18.6123 6.84219 19.3151 6.963 19.9477 7.25933L20.3072 5.59776C19.6911 5.37206 19.0393 5.25516 18.3818 5.25244C16.3449 5.25244 14.9112 6.31682 14.8988 7.84028C14.8988 8.9656 15.9235 9.59529 16.7044 9.97311C17.4852 10.3509 17.7745 10.5987 17.7703 10.9441C17.7703 11.4722 17.1299 11.6997 16.5308 11.7119C15.7941 11.7277 15.0657 11.5571 14.4154 11.2162L14.0394 12.9306C14.7713 13.2057 15.5491 13.3435 16.3325 13.3369C18.4975 13.3369 19.9147 12.2847 19.9188 10.6556L19.9353 10.6678ZM25.29 13.215H27.1947L25.542 5.38244H23.7984C23.6105 5.38117 23.4264 5.43497 23.2696 5.53699C23.1129 5.63901 22.9906 5.78462 22.9184 5.95526L19.8279 13.215H21.9805L22.3937 12.045H25.0379L25.29 13.215ZM22.9886 10.4403L24.0753 7.49902L24.6991 10.4403H22.9886ZM14.3121 5.38244L12.6099 13.215H10.5441L12.2504 5.38244H14.3121Z" fill="white"/>
                                </svg>
                            </span>
                            Visa
                        </li>
                        <li>
                            <span>     
                                <svg width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.0562 1.98096H10.9441V16.5402H19.0562V1.98096Z" fill="#FF5F00"/>
                                    <path d="M11.4592 9.25937C11.4579 7.85719 11.776 6.4731 12.3895 5.21188C13.003 3.95065 13.8957 2.84535 15.0001 1.97966C13.6325 0.905991 11.9899 0.238295 10.2603 0.0528828C8.53067 -0.132529 6.78369 0.171819 5.21906 0.931153C3.65442 1.69049 2.33525 2.87417 1.41234 4.34689C0.489422 5.81962 0 7.52197 0 9.25937C0 10.9968 0.489422 12.6991 1.41234 14.1718C2.33525 15.6446 3.65442 16.8283 5.21906 17.5876C6.78369 18.3469 8.53067 18.6513 10.2603 18.4659C11.9899 18.2804 13.6325 17.6128 15.0001 16.5391C13.8957 15.6734 13.003 14.5681 12.3895 13.3069C11.776 12.0456 11.4579 10.6615 11.4592 9.25937V9.25937Z" fill="#EB001B"/>
                                    <path d="M30 9.25937C30.0001 10.9967 29.5107 12.6991 28.5879 14.1718C27.665 15.6445 26.3459 16.8282 24.7813 17.5876C23.2167 18.3469 21.4697 18.6513 19.7401 18.4659C18.0105 18.2805 16.368 17.6128 15.0004 16.5391C16.1038 15.6725 16.9958 14.567 17.6092 13.306C18.2226 12.045 18.5413 10.6613 18.5413 9.25937C18.5413 7.85742 18.2226 6.47376 17.6092 5.21273C16.9958 3.9517 16.1038 2.84623 15.0004 1.97966C16.368 0.905987 18.0105 0.23829 19.7401 0.0528804C21.4697 -0.132529 23.2167 0.171832 24.7813 0.931174C26.3459 1.69052 27.665 2.8742 28.5879 4.34692C29.5107 5.81965 30.0001 7.52199 30 9.25937V9.25937Z" fill="#F79E1B"/>
                                </svg>
                            </span>
                        MasterCard
                        </li>
                        <li>
                            <span> <img src="https://cdn.shopify.com/s/files/1/0584/9628/6901/files/amex-1.svg" alt="card" /> </span> 
                            American Express
                        </li>
                        <li>
                            <span> <img src="https://cdn.shopify.com/s/files/1/0584/9628/6901/files/discover-1.svg" loading="lazy" class="payment-icons" alt="card" role="img"/> </span> 
                            Discover
                        </li>
                        <li>
                            <span> <img src="https://cdn.shopify.com/s/files/1/0584/9628/6901/files/paypal-1.svg" /> </span> 
                            Paypal    
                        </li>
                    </ul>
                </div>
                <div className="item item-3">
                    <h3>Sell</h3>
                    <ul>
                        <li>
                            <a href="">Become a Foundary partner</a>
                        </li>
                        <li>
                            <a href="">Become an Affiliate</a>
                        </li>
                    </ul>
                </div>
                <div className="item item-4">
                    <h3>About</h3>
                    <ul>
                        <li>
                            <a href="">Terms and Conditions</a>
                        </li>
                        <li>
                            <a href="">Terms of Use</a>
                        </li>
                        <li>
                            <a href="">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="">Return Policy</a>
                        </li>
                        <li>
                            <a href="">Legal</a>
                        </li>
                    </ul>
                </div>
                <div className="item item-5">
                    <h3>Help</h3>
                    <ul>
                        <li>
                            <a href="">FAQ</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-copyright">Copyright © 1999-2022 MyFonts Inc. All rights reserved.</div>
        </div>
    </div>
  )
}

export default Footer