import './ContentButtom.css'

function ContentButtom() {
  return (
    <div className='content-buttom-wrapper'>
        <div className="content-buttom-container">
            <h2>About Antartida Rounded Font Family</h2>
            <hr />
            <p>Antartida Rounded is a sans serif with rounded terminals, its simple, kind of neutral feeling, is functional, clean and minimal, rounded terminals make it friendly and warm. Is a family of 8 fonts, weights 4 and in italics. This font contains glyphs that help emphasize alternate text or headlines.</p>
            <div className='author-desc'>
                <p><span>Publisher:</span> <a href="">Luciano Vergara</a></p>
                <p><span>Foundry:</span> <a href="">Latinotype</a></p>
                <p><span>Design Owner:</span> <a href="">Latinotype</a></p>
                <p className='desc-date'><span>MyFonts debut:</span> Jul 11, 2012</p>
                <p><span>Antartida Rounded</span></p>
            </div>
        </div>
    </div>
  )
}

export default ContentButtom