import ImageCard from '../components/ImageCard'
import css from '../components/ImageGallery.module.css'

const ImageGallery = ( {photos, onImageClick} ) => {
    return (
        <ul className={css.list}>
          {photos.map(({ id, urls: {full, small}, alt_description }) => (
         <ImageCard
          key={id}
          id={id}
          full={full}
          small={small}
          alt_description={alt_description}
          onImageClick={onImageClick}
        />
          ))}
        </ul>
      )
}

export default ImageGallery