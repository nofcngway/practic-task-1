import { useState } from 'react'
import './ProductGallery.css'

const ProductGallery = ({ images, title }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  if (images.length === 0) return null

  return (
    <div className="product-gallery">
      <img
        className="product-gallery__main"
        src={images[activeIndex]}
        alt={title}
      />

      {images.length > 1 && (
        <ul className="product-gallery__thumbs">
          {images.map((image, index) => (
            <li key={image}>
              <button
                type="button"
                className={
                  index === activeIndex
                    ? 'product-gallery__thumb product-gallery__thumb_active'
                    : 'product-gallery__thumb'
                }
                onClick={() => setActiveIndex(index)}
                aria-label={`Фото ${index + 1}`}
              >
                <img src={image} alt="" loading="lazy" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ProductGallery
